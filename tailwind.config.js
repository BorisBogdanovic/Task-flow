/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'custom-gray': '#6B7280',
                'active-border': '#ffffff',

            },
            opacity: {
                'active-opacity': '1',
                'inactive-opacity': '0',
            },
            keyframes: {
                'slide-up': {
                    '0%': {transform: 'translateY(50px)', opacity: '0'},
                    '100%': {transform: 'translateY(0)', opacity: '1'},
                },
                'bgGradient': {
                    '0%': {
                        width: '200px',
                        height: '200px',
                        opacity: '0',
                    },
                    '100%': {
                        width: '512px',
                        height: '512px',
                        opacity: '0.4',
                    },
                },
                'square1': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '110px', height: '117px', opacity: '0.5'},
                    '100%': {
                        width: '110px',
                        height: '117px',
                        opacity: '1',
                        left: '45%',
                        top: '15%',
                        transform: 'matrix(0.98, 0.22, -0.22, 0.98, 0, 0)',
                    },
                },
                'square2': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '27px', height: '27px', opacity: '0.5'},
                    '100%': {
                        width: '27px',
                        height: '27px',
                        opacity: '1',
                        left: '30%',
                        top: '15%',
                    },
                },
                'square3': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '35px', height: '35px', opacity: '0.5'},
                    '100%': {
                        width: '35px',
                        height: '35px',
                        opacity: '1',
                        left: '20%',
                        top: '25%',
                    },
                },
                'square4': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '74px', height: '74px', opacity: '0.5'},
                    '100%': {
                        width: '74px',
                        height: '74px',
                        opacity: '1',
                        left: '30%',
                        top: '30%',
                        transform: 'matrix(0.98, -0.18, 0.18, 0.98, 0, 0)',
                    },
                },
                'square5': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '90px', height: '90px', opacity: '0.5'},
                    '100%': {
                        width: '90px',
                        height: '90px',
                        opacity: '1',
                        left: '65%',
                        top: '10%',
                        transform: 'matrix(0.94, 0.34, -0.34, 0.94, 0, 0)',
                    },
                },
                'square6': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '90px', height: '90px', opacity: '0.5'},
                    '100%': {
                        width: '90px',
                        height: '90px',
                        opacity: '1',
                        left: '45%',
                        top: '40%',
                        transform: 'matrix(0.99, -0.1, 0.1, 0.99, 0, 0)',
                    },
                },
                'square7': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '45px', height: '45px', opacity: '0.5'},
                    '100%': {
                        width: '45px',
                        height: '45px',
                        opacity: '1',
                        left: '70%',
                        top: '50%',
                        transform: 'matrix(0.99, -0.12, 0.12, 0.99, 0, 0)',
                    },
                },
                'square8': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '45px', height: '45px', opacity: '0.5'},
                    '100%': {
                        width: '45px',
                        height: '45px',
                        opacity: '1',
                        left: '28%',
                        top: '55%',
                        transform: 'matrix(0.99, 0.16, -0.16, 0.99, 0, 0)',
                    },
                },
                'square9': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '45px', height: '45px', opacity: '0.5'},
                    '100%': {
                        width: '45px',
                        height: '45px',
                        opacity: '1',
                        left: '60%',
                        top: '60%',
                        transform: 'matrix(0.98, -0.18, 0.18, 0.98, 0, 0)',
                    },
                },
                'square10': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '85px', height: '85px', opacity: '0.5'},
                    '100%': {
                        width: '85px',
                        height: '85px',
                        opacity: '1',
                        left: '35%',
                        top: '65%',
                        transform: 'matrix(0.78, 0.63, -0.63, 0.78, 0, 0)',
                    },
                },
                'square11': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '85px', height: '85px', opacity: '0.5'},
                    '100%': {
                        width: '85px',
                        height: '85px',
                        opacity: '1',
                        left: '10%',
                        top: '37%',
                        transform: 'matrix(0.88, -0.48, 0.48, 0.88, 0, 0)',
                    },
                },
                'square12': {
                    '0%': {width: '0', height: '0', opacity: '0'},
                    '50%': {width: '65px', height: '65px', opacity: '0.5'},
                    '100%': {
                        width: '65px',
                        height: '65px',
                        opacity: '1',
                        left: '70%',
                        top: '70%',
                        transform: 'matrix(0.99, -0.15, 0.15, 0.99, 0, 0)',
                    },
                },
                'rotateBall': {
                    '0%': {transform: 'rotate(30deg) translate(-50px, 0)',opacity:0},
                    '100%': {transform: 'rotate(80deg) translate(50px, 0)',opacity:1}
                },
                'rotateBall2': {
                    '0%': {transform: 'rotate(30deg) translate(-50px, 0)',opacity:0},
                    '100%': {
                        transform: 'rotate(90deg) translate(50px, 0)',
                        opacity: 1,
                        top: '11%',
                        left: '40%'
                    }
                },
                'rotateBall3': {
                    '0%': {transform: 'rotate(30deg) translate(-50px, 0)',opacity:0},
                    '100%': {
                        transform: 'rotate(80deg) translate(50px, 0)',
                        opacity: 1,
                        top: '50%',
                        left: '-42%'
                    }
                },

                'tilt1': {
                    '0%': {transform: 'rotate(5deg)'},
                    '50%': {transform: 'rotate(-20deg) translateY(10px)'},
                    '75%': {transform: 'rotate(10deg) translateY(0)'},
                    '100%': {transform: 'rotate(5deg)'},
                },
                'tilt4': {
                    '0%': {transform: 'rotate(-10deg) translateX(0) translateY(0)'},
                    '50%': {transform: 'rotate(-10deg) translateX(20px) translateY(20px)'},
                    '100%': {transform: 'rotate(-10deg) translateX(0) translateY(0)'},
                },
                'tilt5': {
                    '0%': {transform: 'rotate(15deg) translateX(0) translateY(0)'},
                    '50%': {transform: 'rotate(-5deg) translateX(0) translateY(0)'},
                    '100%': {transform: 'rotate(15deg) translateX(0) translateY(0)'},
                },
                'tilt6': {
                    '0%': {transform: 'rotate(-10deg) translateX(0) translateY(0)'},
                    '50%': {transform: 'rotate(0deg) translateX(0) translateY(0)'},
                    '75%': {transform: 'rotate(10deg) translateX(0) translateY(0)'},
                    '100%': {transform: 'rotate(-10deg) translateX(0) translateY(0)'},
                },
                'tilt8': {
                    '0%': {transform: 'rotate(-15deg) translateX(0) translateY(0)'},
                    '50%': {transform: 'rotate(5deg) translateX(0) translateY(10px) scale(1.2)'},
                    '100%': {transform: 'rotate(-15deg) translateX(0) translateY(0)'},
                },
                'tilt10': {
                    '0%': {transform: 'rotate(-15deg) translateX(0) translateY(0)'},
                    '50%': {transform: 'rotate(25deg) translateX(0) translateY(0) scale(0.9)'},
                    '100%': {transform: 'rotate(-15deg) translateX(0) translateY(0)'},
                }
                ,
                'tilt11': {
                    '0%': {transform: 'rotate(-5deg) translateX(0) translateY(0)'},
                    '25%': {transform: 'rotate(40deg) translateX(15px) translateY(-15px) scale(0.9)'},
                    '50%': {transform: 'rotate(-5deg) translateX(0) translateY(0)'},
                    '75%': {transform: 'rotate(-30deg) translateX(0) translateY(0)'},
                    '100%': {transform: 'rotate(-5deg) translateX(0) translateY(0)'},
                }

            },
            animation: {
                'slide-up': 'slide-up 0.5s forwards',
                'bgGradient': 'bgGradient 2s 2s forwards',
                'combined': 'square1 1s 3s forwards 1, tilt1 8s 3s forwards infinite',
                'square2': 'square2 1s 3s forwards 1',
                'square3': 'square3 1s 3s forwards 1',
                'combined2': 'square4 1s 3s forwards 1, tilt4 8s 3s forwards infinite',
                'combined3': 'square5 1s 3s forwards 1, tilt5 8s 3s forwards infinite',
                'combined4': 'square6 1s 3s forwards 1, tilt6 8s 3s forwards infinite',
                'square7': 'square7 1s 3s forwards 1',
                'combined5': 'square8 1s 3s forwards 1, tilt8 8s 3s forwards infinite',
                'square9': 'square9 1s 3s forwards 1',
                'combined6': 'square10 1s 3s forwards 1, tilt10 8s 3s forwards infinite',
                'combined7': 'square11 1s 3s forwards 1, tilt11 8s 3s forwards infinite',
                'square12': 'square12 1s 3s forwards 1',
                'rotateBall':'rotateBall 3s 1s forwards ',
                'rotateBall2':'rotateBall2 3s 1s forwards ',
                'rotateBall3':'rotateBall3 3s 1s forwards ',

            },
            blur: {
                '50': '50px',
            },
            width: {
                'custom-container': '1536px',
            },
            maxWidth: {
                'custom-container': '1536px',
            },
            fontFamily: {
                body: ['Nunito Sans', 'sans-serif'],
            },
        },
    },
    plugins: [
        function ({addComponents}) {
            addComponents({
                '.container': {
                    width: '100%',
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '1024px',
                    },
                    '@screen xl': {
                        maxWidth: '1280px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1536px',
                    },
                },
            });
        },
        function ({addUtilities}) {
            addUtilities({
                '.tab.active': {
                    borderColor: '#ffffff',
                },
                '.tab.active .bg-gradient-to-br': {
                    opacity: '100',
                },

                '.tab.active img': {
                    opacity: '100',
                },
                '.btn-hover-gradient': {
                    background: 'linear-gradient(-90deg, #51B599 0%, #178AAD 100%)',
                },
            }, ['hover']);
        },
    ],
};