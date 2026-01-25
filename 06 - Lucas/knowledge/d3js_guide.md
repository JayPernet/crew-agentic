# D3.js Guide for Amanda

## What is D3.js?
D3 (Data-Driven Documents) is the industry standard for creating custom, interactive data visualizations on the web. It binds data to DOM elements and applies data-driven transformations.

## Official Resources
- **Website**: https://d3js.org/
- **Gallery**: https://observablehq.com/@d3/gallery
- **Documentation**: https://d3js.org/api

## Why D3.js for Data Visualization

### Benefits
- **Fully Custom**: Create any visualization imaginable
- **Data-Driven**: Automatically updates visual elements from data
- **Interactive**: Built-in support for zooming, panning, brushing
- **SVG-Based**: Scalable, crisp graphics
- **Animations**: Smooth transitions between states
- **Industry Standard**: Used by NYT, Bloomberg, etc.

## Installation

```bash
npm install d3
```

```javascript
import * as d3 from 'd3';

// Or import specific modules
import { select, scaleLinear, axisBottom } from 'd3';
```

## Amanda's Essential D3 Patterns

### Pattern 1: Bar Chart
```javascript
const data = [30, 86, 168, 281, 303, 365];

const width = 600;
const height = 400;
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0.1);

const y = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([height - margin.bottom, margin.top]);

svg.selectAll('rect')
  .data(data)
  .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', d => y(d))
    .attr('height', d => y(0) - y(d))
    .attr('width', x.bandwidth())
    .attr('fill', 'var(--color-primary)');

// Animate in
svg.selectAll('rect')
  .attr('y', y(0))
  .attr('height', 0)
  .transition()
  .duration(800)
  .attr('y', d => y(d))
  .attr('height', d => y(0) - y(d));
```

### Pattern 2: Line Chart
```javascript
const data = [
  { date: new Date('2024-01'), value: 100 },
  { date: new Date('2024-02'), value: 150 },
  { date: new Date('2024-03'), value: 130 },
  // ...
];

const x = d3.scaleTime()
  .domain(d3.extent(data, d => d.date))
  .range([margin.left, width - margin.right]);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([height - margin.bottom, margin.top]);

const line = d3.line()
  .x(d => x(d.date))
  .y(d => y(d.value))
  .curve(d3.curveMonotoneX);  // Smooth curve

svg.append('path')
  .datum(data)
  .attr('fill', 'none')
  .attr('stroke', 'var(--color-primary)')
  .attr('stroke-width', 2)
  .attr('d', line);

// Animate line drawing
const path = svg.select('path');
const length = path.node().getTotalLength();

path
  .attr('stroke-dasharray', length + ' ' + length)
  .attr('stroke-dashoffset', length)
  .transition()
  .duration(2000)
  .ease(d3.easeLinear)
  .attr('stroke-dashoffset', 0);
```

### Pattern 3: Donut Chart
```javascript
const data = [
  { label: 'A', value: 30 },
  { label: 'B', value: 50  },
  { label: 'C', value: 20 }
];

const width = 400;
const height = 400;
const radius = Math.min(width, height) / 2;

const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

const color = d3.scaleOrdinal()
  .domain(data.map(d => d.label))
  .range(['#6366f1', '#8b5cf6', '#ec4899']);

const pie = d3.pie()
  .value(d => d.value)
  .sort(null);

const arc = d3.arc()
  .innerRadius(radius * 0.6)  // Donut hole
  .outerRadius(radius);

const arcs = svg.selectAll('arc')
  .data(pie(data))
  .join('g');

arcs.append('path')
  .attr('fill', d => color(d.data.label))
  .attr('d', arc)
  .on('mouseenter', function() {
    d3.select(this)
      .transition()
      .attr('d', d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius * 1.1)
      );
  })
  .on('mouseleave', function() {
    d3.select(this)
      .transition()
      .attr('d', arc);
  });

// Animate in
arcs.selectAll('path')
  .transition()
  .duration(1000)
  .attrTween('d', function(d) {
    const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
    return t => arc(interpolate(t));
  });
```

### Pattern 4: Interactive Tooltip
```javascript
const tooltip = d3.select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0)
  .style('position', 'absolute')
  .style('background', 'white')
  .style('padding', '8px')
  .style('border-radius', '4px')
  .style('box-shadow', '0 2px 8px rgba(0,0,0,0.15)');

svg.selectAll('circle')
  .data(data)
  .join('circle')
    .attr('cx', d => x(d.x))
    .attr('cy', d => y(d.y))
    .attr('r', 5)
    .on('mouseover', (event, d) => {
      tooltip
        .transition()
        .duration(200)
        .style('opacity', 1);
      
      tooltip
        .html(`<strong>${d.label}</strong><br/>Value: ${d.value}`)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px');
    })
    .on('mouseout', () => {
      tooltip
        .transition()
        .duration(500)
        .style('opacity', 0);
    });
```

### Pattern 5: Responsive Chart (React)
```jsx
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
  const svgRef = useRef();
  
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = 400;
    
    // Clear previous
    svg.selectAll('*').remove();
    
    // Create chart
    const x = d3.scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.1);
    
    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);
    
    svg
      .attr('width', width)
      .attr('height', height);
    
    svg.selectAll('rect')
      .data(data)
      .join('rect')
        .attr('x', (d, i) => x(i))
        .attr('y', d => y(d))
        .attr('height', d => height - y(d))
        .attr('width', x.bandwidth())
        .attr('fill', 'steelblue');
  }, [data]);
  
  return <svg ref={svgRef} />;
}
```

## Component Spec Example

```markdown
## Dashboard - Revenue Chart

### Chart Type
- Line chart with area fill
- X-axis: Time (monthly)
- Y-axis: Revenue ($)
- Responsive to container width

### D3 Configuration
```javascript
const margin = { top: 20, right: 30, bottom: 30, left: 60 };
const x = d3.scaleTime();
const y = d3.scaleLinear();

const line = d3.line()
  .x(d => x(d.date))
  .y(d => y(d.revenue))
  .curve(d3.curveMonotoneX);  // Smooth

const area = d3.area()
  .x(d => x(d.date))
  .y0(height)
  .y1(d => y(d.revenue))
  .curve(d3.curveMonotoneX);
```

### Styling
- Line color: var(--color-primary)
- Line width: 3px
- Area fill: var(--color-primary) at 10% opacity
- Grid lines: subtle, var(--color-border)

### Interactions
- Hover: Show tooltip with exact value
- Tooltip: White background, shadow, position near mouse
- Animation: Line draws in over 1.5s on mount

### Axes
- X-axis: Bottom, format "MMM YYYY"
- Y-axis: Left, format "$XXk"
- Both axes use var(--font-family-base)
```

## Amanda's D3 Mandate

When specifying D3 visualizations:

1. **Define chart type**: Bar, line, pie, scatter, etc.
2. **Specify scales**: Linear, time, band, ordinal?
3. **Document interactions**: Tooltips, zoom, brush?
4. **Animation details**: Entry, update, exit transitions
5. **Responsive behavior**: How it adapts to screen size
6. **Styling**: Colors from design system tokens

## Common Chart Types

| Chart | When to Use |
|-------|-------------|
| **Bar** | Comparing categories |
| **Line** | Trends over time |
| **Area** | Volume over time |
| **Pie/Donut** | Parts of whole (use sparingly) |
| **Scatter** | Correlation between two variables |
| **Heatmap** | Patterns in matrix data |
| **Tree/Network** | Hierarchical or relational data |

## Performance Tips

- Use Canvas for 1000+ elements
- Debounce resize events
- Memoize expensive calculations
- Use `join()` pattern for efficient updates

---

**Remember**: D3 is **POWERFUL** but complex. Reserve it for truly custom visualizations. For standard charts, consider Chart.js or Recharts. Use D3 when you need full control and unique visual storytelling.
