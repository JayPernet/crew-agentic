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
        },
        // Modais. Defina aparência, estrutura e comportamento.
        // header e footer são fixos (sticky) para evitar que sumam durante scroll do conteúdo.
        "modals": {
            // Camada de overlay que bloqueia a página ao fundo
            "overlay": {
                "background": "",       // Ex: rgba(0, 0, 0, 0.6)
                "backdropFilter": "",   // Ex: blur(4px) — opcional, para glassmorphism
                "zIndex": ""            // Ex: 1000 — deve estar acima de tudo
            },
            // Container principal do modal
            "container": {
                "background": "",
                "borderRadius": "",
                "shadow": "",
                "width": {
                    "default": "",      // Ex: 560px
                    "small": "",        // Ex: 400px — confirmações, alertas
                    "large": "",        // Ex: 800px — formulários complexos, previews
                    "fullscreen": ""    // Ex: 100vw / 100vh — mobile ou conteúdo extenso
                },
                "maxHeight": "",        // Ex: 90vh — impede modal maior que a viewport
                "zIndex": ""            // Ex: 1001 — acima do overlay
            },
            // Cabeçalho fixo no topo do modal (sticky)
            // Permanece visível mesmo quando o body do modal tem scroll
            "header": {
                "position": "sticky",   // Não altere — é a razão de existir desta seção
                "top": "0",             // Não altere
                "background": "",       // Deve ser igual ao container.background para não vazar conteúdo por baixo
                "padding": "",          // Ex: 24px 24px 16px
                "borderBottom": "",     // Ex: 1px solid token border.subtle — separa visualmente do body
                "zIndex": "",           // Ex: 10 — acima do conteúdo do body durante scroll
                "title": {
                    "fontSize": "",
                    "fontWeight": "",
                    "color": ""
                },
                "closeButton": {
                    "size": "",         // Ex: 32px
                    "color": "",
                    "hover": ""
                }
            },
            // Área de conteúdo rolável
            "body": {
                "padding": "",          // Ex: 24px
                "overflowY": "auto",    // Não altere — scroll fica contido aqui, não no container inteiro
                "gap": ""              // Espaço entre elementos internos, se usar flex/grid
            },
            // Rodapé fixo na base do modal (sticky)
            // Permanece visível com os CTAs mesmo quando o body tem scroll longo
            "footer": {
                "position": "sticky",   // Não altere
                "bottom": "0",          // Não altere
                "background": "",       // Deve ser igual ao container.background
                "padding": "",          // Ex: 16px 24px 24px
                "borderTop": "",        // Ex: 1px solid token border.subtle
                "zIndex": "",           // Ex: 10 — igual ao header
                "layout": "",           // Ex: flex — alinhamento dos botões de ação
                "alignment": "",        // Ex: flex-end | space-between
                "gap": ""              // Espaço entre botões de ação
            },
            // Comportamento e acessibilidade
            "behavior": {
                "closeOnOverlayClick": "",  // Ex: true — fechar ao clicar fora
                "closeOnEsc": "",           // Ex: true — fechar com tecla Escape
                "trapFocus": "",            // Ex: true — foco preso dentro do modal (acessibilidade)
                "scrollLockBody": ""        // Ex: true — impede scroll da página ao fundo
            },
            // Animação de entrada/saída
            "animation": {
                "enter": {
                    "initial": "",      // Ex: opacity 0, translateY 16px
                    "animate": "",      // Ex: opacity 1, translateY 0
                    "duration": "",     // Ex: 200ms
                    "easing": ""        // Ex: ease-out
                },
                "exit": {
                    "duration": "",     // Ex: 150ms
                    "easing": ""        // Ex: ease-in
                }
            }
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
