$('#selectLanguageDropdown').localizationTool({
    'defaultLanguage' : 'pt_BR', /* (optional) although must be defined if you don't want en_GB */
    'showFlag': true,            /* (optional) show/hide the flag */
    'showCountry': false,         /* (optional) show/hide the country name */
    'showLanguage': false,        /* (optional) show/hide the country language */

    /* 
     * Translate your strings below
     */
    'strings' : {
        /* 
         * You can specify the text string to translate directly... 
         */
        'class:tr-about' : {
            'en_GB' : 'About',
            'pt_BR' : 'Sobre'
        },
        'class:tr-products' : {
            'en_GB' : 'Products',
            'pt_BR' : 'Produtos'
        },
        'class:tr-location' : {
            'en_GB' : 'Location',
            'pt_BR' : 'Localização'
        },
        'class:tr-contact' : {
            'en_GB' : 'Contact Us',
            'pt_BR' : 'Contato'
        },
        'class:tr-welcome' : {
            'en_GB' : 'Welcome to Arval',
            'pt_BR' : 'Bem-vindo à Arval'
        },
        'class:tr-load-more' : {
            'en_GB' : 'Learn More',
            'pt_BR' : 'Veja Mais'
        }
    }
});