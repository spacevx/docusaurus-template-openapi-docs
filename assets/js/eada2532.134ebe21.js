"use strict";(self.webpackChunkdocusaurus_template_openapi_docs=self.webpackChunkdocusaurus_template_openapi_docs||[]).push([[9592],{46962:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>_,contentTitle:()=>v,default:()=>b,frontMatter:()=>m,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"bts-api/update-avion","title":"Modifier un avion existant","description":"Met \xe0 jour les informations d\'un avion dans la flotte","source":"@site/docs/bts-api/update-avion.mdx","sourceDirName":"bts-api","slug":"/bts-api/update-avion","permalink":"/docusaurus-template-openapi-docs/docs/bts-api/update-avion","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-avion","title":"Modifier un avion existant","description":"Met \xe0 jour les informations d\'un avion dans la flotte","sidebar_label":"Modifier un avion","hide_title":true,"hide_table_of_contents":true,"api":"BASE64_ENCODED_API_DETAILS","sidebar_class_name":"put api-method","info_path":"docs/flotte/petstore.yaml","custom_edit_url":null},"sidebar":"openApiSidebar","previous":{"title":"Ajouter un nouvel avion","permalink":"/docusaurus-template-openapi-docs/docs/bts-api/add-avion"},"next":{"title":"R\xe9cup\xe9rer un/les avion(s)","permalink":"/docusaurus-template-openapi-docs/docs/bts-api/get-avions"}}');var n=i(74848),o=i(28453),s=i(57742),r=i.n(s),u=i(78178),d=i.n(u),l=(i(19624),i(96226)),p=i.n(l),c=(i(77675),i(19365),i(51107));const m={id:"update-avion",title:"Modifier un avion existant",description:"Met \xe0 jour les informations d'un avion dans la flotte",sidebar_label:"Modifier un avion",hide_title:!0,hide_table_of_contents:!0,api:"BASE64_ENCODED_API_DETAILS",sidebar_class_name:"put api-method",info_path:"docs/flotte/petstore.yaml",custom_edit_url:null},v=void 0,_={},f=[];function h(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.default,{as:"h1",className:"openapi__heading",children:"Modifier un avion existant"}),"\n",(0,n.jsx)(r(),{method:"put",path:"/avions",context:"callback"}),"\n",(0,n.jsx)(c.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Requ\xeate"}),"\n",(0,n.jsx)(d(),{parameters:[{name:"immatriculation",in:"query",description:"Num\xe9ro d'immatriculation unique de l'avion \xe0 modifier",required:!0,schema:{type:"string",example:"F-ABCD"}},{name:"marque",in:"query",description:"Nouveau constructeur de l'avion",required:!1,schema:{type:"string",example:"Airbus"}},{name:"model",in:"query",description:"Nouveau mod\xe8le sp\xe9cifique de l'avion",required:!1,schema:{type:"string",example:"A320"}},{name:"fuelCapacity",in:"query",description:"Nouvelle capacit\xe9 totale de carburant de l'avion",required:!1,schema:{type:"number",example:2e4}},{name:"fuelLevel",in:"query",description:"Nouveau niveau actuel de carburant de l'avion",required:!1,schema:{type:"number",example:15e3}},{name:"hangarID",in:"query",description:"Nouvel identifiant du hangar o\xf9 l'avion est stock\xe9",required:!1,schema:{type:"integer",example:1}}]}),"\n",(0,n.jsx)(p(),{responses:{200:{description:"Avion mis \xe0 jour avec succ\xe8s"},400:{description:"Donn\xe9es invalides ou immatriculation manquante"},404:{description:"Aucun avion trouv\xe9 avec cette immatriculation"}}})]})}function b(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h()}}}]);