// 🚨 NÃO SOBRESCREVA ESTE TEMPLATE!
// Sempre crie uma cópia deste arquivo para a pasta do seu projeto e edite a cópia.
// Este é um template base que deve permanecer intacto para reutilização futura.

// Paleta de cores primitiva.
// Estes são os valores brutos que serão referenciados pelos tokens semânticos.
const primitiveColors = {
    brand: {
        "50": "#HEX",
        "100": "#HEX",
        "500": "#HEX (Main)",
        "900": "#HEX"
    },
    neutral: {
        "0": "#FFFFFF",
        "50": "#FAFAFA",
        "100": "#F5F5F5",
        "200": "#E5E5E5",
        "800": "#HEX (Dark Text)",
        "900": "#HEX (Black)"
    },
    accent: {
        "main": "#HEX",
        "contrast": "#HEX"
    }
};

export const tokens = {
    designPrinciples: {
        "overall": "[STRING] Descreva a essência e personalidade do design em 2-3 frases. Deve capturar o feeling emocional e a relação que você quer estabelecer com o usuário. Ex: 'Premium fintech with warmth' ou 'Energetic fitness platform that motivates'",
        "keywords": [
            "[ARRAY DE STRINGS] 5-8 palavras-chave que descrevem a identidade visual",
            "Exemplos: trustworthy, premium, warm, playful, minimal, bold, energetic, sophisticated"
        ],
        "avoid": [
            "[ARRAY DE STRINGS] 4-6 coisas que o design NÃO deve ser",
            "Exemplos: generic SaaS look, overly corporate, cluttered, childish, aggressive"
        ]
    },
    // Defina tokens semânticos baseados na função da cor.
    // NÃO use apenas nomes de cor (blue, red). Use a função (primary-action, surface-card).
    colorPalette: {
        primitive: primitiveColors,
        semantic: {
            "background": {
                "page": "primitiveColors.neutral[50]", // Ex: "neutral-50"
                "surface": "primitiveColors.neutral[0]", // Ex: "white"
                "surfaceHighlight": "primitiveColors.neutral[100]", // Ex: "neutral-100"
                "overlay": "rgba(0, 0, 0, 0.5)" // Ex: "black/50%"
            },
            "text": {
                "heading": "primitiveColors.neutral[900]", // Ex: "neutral-900"
                "body": "primitiveColors.neutral[800]", // Ex: "neutral-700"
                "muted": "primitiveColors.neutral[500]", // Ex: "neutral-500"
                "onPrimary": "primitiveColors.neutral[0]" // Ex: "white"
            },
            "border": {
                "subtle": "primitiveColors.neutral[200]", // Ex: "neutral-200"
                "default": "primitiveColors.neutral[300]", // Ex: "neutral-300"
                "focus": "primitiveColors.brand[500]" // Ex: "brand-500"
            },
            "action": {
                "primary": {
                    "default": "primitiveColors.brand[500]", // Ex: "brand-600"
                    "hover": "primitiveColors.brand[900]", // Ex: "brand-700"
                    "disabled": "primitiveColors.neutral[200]" // Ex: "neutral-300"
                },
                "secondary": {
                    "default": "primitiveColors.neutral[0]", // Ex: "white"
                    "hover": "primitiveColors.neutral[50]", // Ex: "neutral-50"
                    "border": "primitiveColors.neutral[200]" // Ex: "neutral-300"
                }
            },
            "status": {
                "success": "#HEX (Ex: green-600)",
                "error": "#HEX (Ex: red-600)",
                "warning": "#HEX (Ex: amber-500)",
                "info": "#HEX (Ex: blue-500)"
            }
        }
    },
    // Defina 2 famílias tipográficas: uma para headings, outra para body text
    typography: {
        "fontFamilies": {
            "headings": {
                "family": "Nome da fonte para títulos. Ex: 'Playfair Display', 'Montserrat', 'Inter'",
                "weight": "Peso da fonte. Ex: '500-700'",
                "style": "Estilo especial. Ex: 'Use italic for emphasis', 'All caps for h3'"
            },
            "body": {
                "family": "Nome da fonte para texto corpo. Ex: 'Inter', 'Open Sans', 'Roboto'",
                "weight": "Peso. Ex: '400 for body, 500-600 for emphasis'"
            }
        },
        // Escala tipográfica responsiva. Use clamp() para fluidez entre mobile/desktop
        "scale": {
            "hero-h1": {
                "size": "clamp(2.5rem, 5vw, 4rem)",
                "lineHeight": "1.1 - 1.3 para headlines",
                "letterSpacing": "-0.02em a 0 para títulos grandes"
            },
            "h2": {
                "size": "clamp(2rem, 4vw, 3rem)",
                "lineHeight": "1.2 - 1.4",
                "letterSpacing": "-0.01em"
            },
            "h3": {
                "size": "1.25rem - 1.5rem",
                "lineHeight": "1.4",
                "weight": "600"
            },
            "body": {
                "size": "1rem (16px base)",
                "lineHeight": "1.6 - 1.8 para legibilidade"
            },
            "small": {
                "size": "0.875rem (14px)",
                "lineHeight": "1.5"
            }
        },
        "emphasis": {
            "technique": "Como criar ênfase tipográfica. Ex: 'Italic serif for keywords', 'Bold + color for CTAs'",
            "example": "Exemplo de headline com ênfase aplicada"
        }
    },
    // Sistema de espaçamento consistente. Define respiro e hierarquia visual
    spacing: {
        "philosophy": "Descreva a filosofia de espaçamento. Ex: 'Generous breathing room' ou 'Compact and efficient'",
        // Padding vertical e horizontal das sections principais
        "sectionPadding": {
            "vertical": "clamp(60px, 8vw, 120px)",
            "horizontal": "clamp(20px, 5vw, 80px)"
        },
        "containerMaxWidth": "Largura máxima do conteúdo. Ex: '1200px', '1400px', '100%'",
        // Espaçamentos entre elementos específicos
        "componentSpacing": {
            "betweenSections": "Espaço entre sections. Ex: '0 (sections handle padding)' ou '40px'",
            "betweenHeadingAndContent": "Espaço título→conteúdo. Ex: '24px - 40px'",
            "betweenCards": "Espaço entre cards em grid. Ex: '24px - 32px'",
            "insideCards": "Padding interno dos cards. Ex: '32px - 48px'"
        },
        "grid": {
            "columns": "Sistema de grid. Ex: '12-column', '16-column'",
            "gutter": "Espaço entre colunas. Ex: '24px', '32px'"
        }
    },
    // Componentes reutilizáveis. Defina aparência e comportamento de cada um
    components: {
        "buttons": {
            "primary": {
                "background": "#HEX da cor primary",
                "text": "#HEX da cor do texto",
                "borderRadius": "Ex: '8px' (sharp), '100px' (pill), '4px' (subtle)",
                "padding": "Ex: '16px 32px' (médio), '12px 24px' (compacto)",
                "fontSize": "Ex: '0.9375rem', '1rem'",
                "fontWeight": "Ex: '500', '600'",
                "hover": {
                    "background": "#HEX - geralmente lighter ou darker",
                    "transform": "Ex: 'translateY(-2px)', 'scale(1.05)'",
                    "shadow": "Ex: '0 4px 12px rgba(0,0,0,0.15)'"
                },
                "transition": "Ex: 'all 0.3s ease', 'all 0.2s cubic-bezier(0.4,0,0.2,1)'"
            },
            "secondary": {
                "background": "Ex: 'transparent', '#FFFFFF'",
                "text": "#HEX",
                "border": "Ex: '1.5px solid #HEX', '2px solid currentColor'",
                "borderRadius": "Mesmo do primary ou ligeiramente diferente"
            }
        },
        // Defina 3 variações de cards: default, elevated (mais destaque), subtle (menos destaque)
        "cards": {
            "default": {
                "background": "#HEX - geralmente white ou lightest neutral",
                "borderRadius": "Ex: '12px', '16px', '24px'",
                "padding": "Ex: '32px', '40px 48px'",
                "shadow": "Ex: '0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)'",
                "border": "Ex: 'none', '1px solid rgba(0,0,0,0.05)'"
            },
            "elevated": {
                "background": "#HEX",
                "borderRadius": "Geralmente igual ou maior que default",
                "shadow": "Sombra mais pronunciada que default"
            },
            "subtle": {
                "background": "#HEX - geralmente lightest neutral",
                "borderRadius": "Igual ou menor que default",
                "shadow": "none ou muito sutil",
                "border": "Borda sutil. Ex: '1px solid rgba(0,0,0,0.06)'"
            },
            "hover": {
                "transform": "Ex: 'translateY(-4px)', 'scale(1.02)'",
                "shadow": "Sombra aumentada no hover",
                "transition": "Ex: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'"
            }
        },
        "icons": {
            "style": "Biblioteca e estilo. Ex: 'Lucide icons, stroke 1.5', 'Heroicons, solid'",
            "size": {
                "small": "Ex: '16px', '20px'",
                "default": "Ex: '24px'",
                "large": "Ex: '32px', '40px'",
                "feature": "Para feature cards. Ex: '48px', '56px'"
            },
            // Se ícones tiverem container/background
            "container": {
                "background": "#HEX - geralmente lightest neutral ou accent light",
                "borderRadius": "Ex: '8px', '12px', '50%' (circular)",
                "padding": "Ex: '12px', '16px'"
            }
        },
        "badges": {
            "style": {
                "background": "#HEX - geralmente light neutral ou accent",
                "text": "#HEX - contraste com background",
                "borderRadius": "Ex: '4px', '100px' (pill)",
                "padding": "Ex: '6px 12px', '8px 16px'",
                "fontSize": "Ex: '0.75rem', '0.8125rem'",
                "fontWeight": "Ex: '500', '600'",
                "textTransform": "Ex: 'uppercase', 'capitalize', 'none'",
                "letterSpacing": "Ex: '0.05em' se uppercase, '0' se não"
            }
        },
        "inputs": {
            "borderRadius": "Ex: '8px', '12px'",
            "border": "Ex: '1px solid #E5E5E5', '2px solid rgba(0,0,0,0.1)'",
            "padding": "Ex: '12px 16px', '16px 20px'",
            "focusBorder": "#HEX - geralmente primary color",
            "focusShadow": "Ex: '0 0 0 3px rgba(primary, 0.1)'"
        }
    },
    // Diretrizes para imagens, fotos e ilustrações
    imagery: {
        "style": "Descreva o estilo visual das imagens. Ex: 'Warm lifestyle photos', 'Minimalist illustrations', 'Bold graphic photography'",
        "treatment": {
            "photos": "Tratamento de fotos. Ex: 'Warm color grade', 'High contrast B&W', 'Soft natural lighting'",
            "illustrations": "Estilo de ilustrações se usadas. Ex: 'Geometric shapes in brand colors', '3D rendered objects', 'Hand-drawn sketches'",
            "backgrounds": "Texturas de fundo. Ex: 'Subtle paper texture', 'Gradient mesh', 'Solid colors only'"
        },
        "heroImage": {
            "composition": "Descreva composição da imagem hero. Ex: 'Product mockup centered', 'Person using app on phone', 'Abstract brand visualization'",
            "elements": "Elementos visuais específicos. Ex: 'Floating UI cards', 'Data visualization', 'Brand iconography'"
        }
    },
    // Padrões e tratamentos de backgrounds
    backgrounds: {
        "patterns": {
            "texturedGradient": "Ex: 'Noise texture 2-3% opacity', 'Grain overlay', 'None - flat colors'",
            "meshGradient": "Ex: 'Subtle gradient blend between neutrals', 'Bold color transitions', 'No gradients'"
        },
        "sections": {
            "alternating": "Padrão de alternância. Ex: 'Alternate white/#F5F5F5', 'All same color', 'White/light/white pattern'",
            "emphasis": "Background para sections importantes. Ex: 'Primary color for CTAs', 'Dark for testimonials'",
            "special": "Backgrounds especiais. Ex: 'Textured cream for trust sections', 'Gradient for pricing'"
        }
    },
    // Filosofia e implementação de animações
    animations: {
        "philosophy": "Descreva abordagem de animação. Ex: 'Subtle and purposeful', 'Bold and energetic', 'Minimal motion'",
        "types": {
            "fadeInUp": {
                "initial": "Estado inicial. Ex: 'opacity: 0, y: 20px'",
                "animate": "Estado animado. Ex: 'opacity: 1, y: 0'",
                "duration": "Ex: '0.6s', '0.8s'",
                "easing": "Ex: 'ease-out', 'cubic-bezier(0.4, 0, 0.2, 1)'"
            },
            "hoverLift": {
                "transform": "Ex: 'translateY(-4px)', 'scale(1.05)'",
                "duration": "Ex: '0.3s', '0.2s'"
            },
            "stagger": {
                "delayBetween": "Delay entre itens. Ex: '0.1s', '0.15s'",
                "use": "Onde aplicar. Ex: 'Card grids', 'List items', 'Feature sections'"
            }
        },
        "microInteractions": {
            "buttons": "Ex: 'Scale 1.02 on hover', 'Shadow increase', 'Color shift'",
            "cards": "Ex: 'Lift on hover', 'Border color change', 'Shadow expand'",
            "links": "Ex: 'Underline left to right', 'Color fade', 'Bold on hover'"
        }
    },
    // Estrutura e organização do layout
    layout: {
        "philosophy": "Filosofia de layout. Ex: 'Generous spacing, clear hierarchy', 'Compact efficiency', 'Asymmetric and bold'",
        "hero": {
            "layout": "Estrutura do hero. Ex: '50/50 split', 'Centered single column', '60/40 text/image'",
            "textAlignment": "Ex: 'left', 'center', 'right'",
            "imagePosition": "Ex: 'Right side', 'Background', 'Floating above fold'"
        },
        "featureCards": {
            "grid": "Grid layout. Ex: '3 columns desktop, 1 mobile', '2-2-2 grid', '4 columns'",
            "alignment": "Ex: 'Top-aligned icons', 'Centered content', 'Left-aligned text'"
        },
        "ctaSections": {
            "layout": "Ex: 'Centered single column', 'Split left CTA/right image'",
            "maxWidth": "Ex: '600px', '800px', 'full width'"
        }
    },
    // Elementos que constroem credibilidade e confiança
    trustElements: {
        // Barra de logos de clientes/parceiros
        "logoBar": {
            "style": "Ex: 'Grayscale logos', 'Full color', 'Monochrome primary color'",
            "opacity": "Ex: '60-70%', '100%'",
            "size": "Ex: 'Height 24-32px', 'Height 40px'"
        },
        // Números/estatísticas de impacto
        "stats": {
            "style": "Ex: 'Large serif numbers, small labels', 'Bold sans numbers'",
            "numberSize": "Ex: '3rem - 4rem', '2.5rem'",
            "labelSize": "Ex: '0.875rem', '1rem'"
        },
        // Checkmarks/bullets para listas de features/benefícios
        "checkmarks": {
            "icon": "Ícone usado. Ex: 'Check from Lucide', 'CheckCircle', 'Custom SVG'",
            "color": "#HEX - geralmente primary ou accent",
            "style": "Ex: 'Inline with text', 'Separate with background circle'"
        }
    },
    footer: {
        "background": "#HEX - geralmente white, lightest neutral, ou primary",
        "layout": "Estrutura do footer. Ex: '4-column grid', '3 columns + logo', 'Single centered column'",
        "divider": "Divisor acima do footer. Ex: '1px solid rgba(0,0,0,0.08)', 'None'",
        "bottomBar": "Barra inferior. Ex: 'Copyright + links, small muted text'"
    }
};
