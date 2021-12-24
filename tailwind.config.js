module.exports = {
    content: ["./src/**/*.{html,js,css}"],
    theme: {
        extend: {
            fontFamily: {
              'default': 'Lato-Regular'
            }
          },
        screens: {
            'sm': '300px',
            'sm+': '640px',
            'md': '745px',
            'lg': '1024px',
            'xl': '1280px'
          },
        container: {
            center: true,
        },
        colors: {
            'green': '#A7CF43',
            'black': '#2D3A2E',
            'gray': '#B8B8B8',
            'white': "#FFFF",
            'light-gray': "#F6F6F6",
            'orange': '#F79A00',
            'blue': '#1572C9',
            'opacityGreen': '#F6FAEC',
        },
        borderRadius: {
            'default': '28px',
            'quatro': '10px',
        },
        fontSize: {
            'default': '16px',
            'h1': '32px',
            'small': '14px',
            'h1-sm': '25px',
            'extra-small': '12px',
            'medium': '18px',
            "h2": '20px'
        },
        lineHeight: {
            'deafult': '19px',
        },
        boxShadow: {
            'default': '0px 5px 10px 5px rgba(0, 0, 0, 0.05);',
        },
        padding: {
            'input-padding': '10px 25px',
        },
      },
}