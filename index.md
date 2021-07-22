---
layout: layout.njk
title: test homepage only
---
{% from './_includes/_components.njk' import hero %}
{{title}}


{{ hero({ 
    title: "Testing the CRM templates",
    subtitle: "",
    image:"",
    buttontext: "First Template",
    link: "/template",
    arialabel: "Testing the first template"
})}} 
