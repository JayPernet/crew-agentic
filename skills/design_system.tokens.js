// 🚨 NÃO SOBRESCREVA ESTE TEMPLATE!
// Sempre crie uma cópia deste arquivo para a pasta do seu projeto e edite a cópia.
// Este é um template base que deve permanecer intacto para reutilização futura.

// Paleta de cores primitiva.
// Estes são os valores brutos que serão referenciados pelos tokens semânticos.
const primitiveColors = {
    brand: {
        "50": "",
        "100": "",
        "500": " (Main)",
        "900": ""
    },
    neutral: {
        "0": "",
        "50": "",
        "100": "",
        "200": "",
        "800": " (Dark Text)",
        "900": " (Black)"
    },
    accent: {
        "main": "",
        "contrast": ""
    }
};

export const tokens = {
    designPrinciples: {
        "overall": "",
        "keywords": [
            ""
        ],
        "avoid": [
            ""
        ]
    },
    // Defina tokens semânticos baseados na função da cor.
    // NÃO use apenas nomes de cor (blue, red). Use a função (primary-action, surface-card).
    colorPalette: {
        primitive: primitiveColors,
        semantic: {
            "background": {
                "page": "",
                "surface": "",
                "surfaceHighlight": "",
                "overlay": ""
            },
            "text": {
                "heading": "",
                "body": "",
                "muted": "",
                "onPrimary": ""
            },
            "border": {
                "subtle": "",
                "default": "",
                "focus": ""
            },
            "action": {
                "primary": {
                    "default": "",
                    "hover": "",
                    "disabled": ""
                },
                "secondary": {
                    "default": "",
                    "hover": "",
                    "border": ""
                }
            },
            "status": {
                "success": "",
                "error": "",
                "warning": "",
                "info": ""
            }
        }
    },
    // Defina 2 famílias tipográficas: uma para headings, outra para body text
    typography: {
        "fontFamilies": {
            "headings": {
                "family": "",
                "weight": "",
                "style": ""
            },
            "body": {
                "family": "",
                "weight": ""
            }
        },
        // Escala tipográfica responsiva. Use clamp() para fluidez entre mobile/desktop
        "scale": {
            "hero-h1": {
                "size": "",
                "lineHeight": "",
                "letterSpacing": ""
            },
            "h2": {
                "size": "",
                "lineHeight": "",
                "letterSpacing": ""
            },
            "h3": {
                "size": "",
                "lineHeight": "",
                "weight": ""
            },
            "body": {
                "size": "",
                "lineHeight": ""
            },
            "small": {
                "size": "",
                "lineHeight": ""
            }
        },
        "emphasis": {
            "technique": "",
            "example": ""
        }
    },
    // Sistema de espaçamento consistente. Define respiro e hierarquia visual
    spacing: {
        "philosophy": "",
        // Padding vertical e horizontal das sections principais
        "sectionPadding": {
            "vertical": "",
            "horizontal": ""
        },
        "containerMaxWidth": "",
        // Espaçamentos entre elementos específicos
        "componentSpacing": {
            "betweenSections": "",
            "betweenHeadingAndContent": "",
            "betweenCards": "",
            "insideCards": ""
        },
        "grid": {
            "columns": "",
            "gutter": ""
        }
    },
    // Componentes reutilizáveis. Defina aparência e comportamento de cada um
    components: {
        "buttons": {
            "primary": {
                "background": "",
                "text": "",
                "borderRadius": "",
                "padding": "",
                "fontSize": "",
                "fontWeight": "",
                "hover": {
                    "background": "",
                    "transform": "",
                    "shadow": ""
                },
                "transition": ""
            },
            "secondary": {
                "background": "",
                "text": "",
                "border": "",
                "borderRadius": ""
            }
        },
        // Defina 3 variações de cards: default, elevated (mais destaque), subtle (menos destaque)
        "cards": {
            "default": {
                "background": "",
                "borderRadius": "",
                "padding": "",
                "shadow": "",
                "border": ""
            },
            "elevated": {
                "background": "",
                "borderRadius": "",
                "shadow": ""
            },
            "subtle": {
                "background": "",
                "borderRadius": "",
                "shadow": "",
                "border": ""
            },
            "hover": {
                "transform": "",
                "shadow": "",
                "transition": ""
            }
        },
        "icons": {
            "style": "",
            "size": {
                "small": "",
                "default": "",
                "large": "",
                "feature": ""
            },
            // Se ícones tiverem container/background
            "container": {
                "background": "",
                "borderRadius": "",
                "padding": ""
            }
        },
        "badges": {
            "style": {
                "background": "",
                "text": "",
                "borderRadius": "",
                "padding": "",
                "fontSize": "",
                "fontWeight": "",
                "textTransform": "",
                "letterSpacing": ""
            }
        },
        "inputs": {
            "borderRadius": "",
            "border": "",
            "padding": "",
            "focusBorder": "",
            "focusShadow": ""
        }
    },
    // Diretrizes para imagens, fotos e ilustrações
    imagery: {
        "style": "",
        "treatment": {
            "photos": "",
            "illustrations": "",
            "backgrounds": ""
        },
        "heroImage": {
            "composition": "",
            "elements": ""
        }
    },
    // Padrões e tratamentos de backgrounds
    backgrounds: {
        "patterns": {
            "texturedGradient": "",
            "meshGradient": ""
        },
        "sections": {
            "alternating": "",
            "emphasis": "",
            "special": ""
        }
    },
    // Filosofia e implementação de animações
    animations: {
        "philosophy": "",
        "types": {
            "fadeInUp": {
                "initial": "",
                "animate": "",
                "duration": "",
                "easing": ""
            },
            "hoverLift": {
                "transform": "",
                "duration": ""
            },
            "stagger": {
                "delayBetween": "",
                "use": ""
            }
        },
        "microInteractions": {
            "buttons": "",
            "cards": "",
            "links": ""
        }
    },
    // Estrutura e organização do layout
    layout: {
        "philosophy": "",
        "hero": {
            "layout": "",
            "textAlignment": "",
            "imagePosition": ""
        },
        "featureCards": {
            "grid": "",
            "alignment": ""
        },
        "ctaSections": {
            "layout": "",
            "maxWidth": ""
        }
    },
    // Elementos que constroem credibilidade e confiança
    trustElements: {
        // Barra de logos de clientes/parceiros
        "logoBar": {
            "style": "",
            "opacity": "",
            "size": ""
        },
        // Números/estatísticas de impacto
        "stats": {
            "style": "",
            "numberSize": "",
            "labelSize": ""
        },
        // Checkmarks/bullets para listas de features/benefícios
        "checkmarks": {
            "icon": "",
            "color": "",
            "style": ""
        }
    },
    footer: {
        "background": "",
        "layout": "",
        "divider": "",
        "bottomBar": ""
    }
};
