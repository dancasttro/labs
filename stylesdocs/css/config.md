# Styleguide options

### Head

    title Clickpag Styleguides
    meta(name="viewport" content="width=device-width, initial-scale=1")
    link(rel="stylesheet" href="css/app.css")
    link(rel='stylesheet' href='css/styledown.css')
    script(src='js/styledown.js')

### Body

    header
      .container
        h1 Clickpag Styleguides
    main.container
      aside
        ul
          li
            a(href='#intro') Introdução
          li
            a(href='#writecss') Escrevendo CSS
          li
            a(href='color') Cores
          li
            a(href='#buttons') Buttons
          li
            a(href='#fields') Fields
          li
            a(href='#checkbox') Checkbox
      section.col-right
        section
          h2#intro Introdução
          p O Clickpag é um UI Kit para o projeto Carteira Digital. Ele fornece um guideline de orientações para a estética e interfaces de usuário. Este é um documento vivo e está em constante mudança.
          h2#writecss Escrevendo CSS
          p Para escrever nosso stylesheets nós usamos metodologias e ferramentas que você ter conhecimento.
          p - Usamos um mix para especificar regras como SMACSS, BEM e SUIT para modularizar mais a escrita de componentes.
          p - Nós usamos Stylus como pre-processador em nosso código CSS.
        section.cores#color
          h2 Cores
          div.box-color.color-brand1
            p #FF7800
          div.box-color.color-brand2
            p #FFC807
          div.box-color.color-brand3
            p #E6B00F
          div.box-color.color-brand4
            p #11BACC
          div.box-color.color-brand5
            p #1BBC9D
          div.box-color.color-brand6
            p #F34235
        section.icones
          h2 Icones
          p Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repellat quae, quia animi quas, ipsam quisquam, voluptatibus quidem tempore temporibus accusamus vel.
          div.box-icons
            i.icon.icon-arrow-up
            span.title-icon icon-arrow-up
          div.box-icons
            i.icon.icon-arrow-down
            span.title-icon icon-arrow-down
          div.box-icons
            i.icon.icon-back
            span.title-icon icon-back
          div.box-icons
            i.icon.icon-card
            span.title-icon icon-card
          div.box-icons
            i.icon.icon-cart
            span.title-icon icon-cart
          div.box-icons
            i.icon.icon-cart-bay
            span.title-icon icon-cart-bay
          div.box-icons
            i.icon.icon-chat
            span.title-icon icon-chat
          div.box-icons
            i.icon.icon-close
            span.title-icon icon-close
          div.box-icons
            i.icon.icon-cod
            span.title-icon icon-cod
          div.box-icons
            i.icon.icon-config
            span.title-icon icon-config
          div.box-icons
            i.icon.icon-cpf
            span.title-icon icon-cpf
          div.box-icons
            i.icon.icon-cvv
            span.title-icon icon-cvv
          div.box-icons
            i.icon.icon-gift
            span.title-icon icon-gift
          div.box-icons
            i.icon.icon-help
            span.title-icon icon-help
          div.box-icons
            i.icon.icon-home
            span.title-icon icon-home
          div.box-icons
            i.icon.icon-keys
            span.title-icon icon-keys
          div.box-icons
            i.icon.icon-mail
            span.title-icon icon-mail
          div.box-icons
            i.icon.icon-menu
            span.title-icon icon-menu
          div.box-icons
            i.icon.icon-mobile
            span.title-icon icon-mobile
          div.box-icons
            i.icon.icon-name
            span.title-icon icon-name
          div.box-icons
            i.icon.icon-ok
            span.title-icon icon-ok
          div.box-icons
            i.icon.icon-phone
            span.title-icon icon-phone
          div.box-icons
            i.icon.icon-search
            span.title-icon icon-search
          div.box-icons
            i.icon.icon-status-analysis
            span.title-icon icon-status-analysis
          div.box-icons
            i.icon.icon-status-approved
            span.title-icon icon-status-approved
          div.box-icons
            i.icon.icon-status-not-approved
            span.title-icon icon-status-not-approved
          div.box-icons
            i.icon.icon-user
            span.title-icon icon-user
        section(sg-content)
