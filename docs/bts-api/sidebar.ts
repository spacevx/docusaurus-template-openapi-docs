import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Avions",
      link: {
        type: "doc",
        id: "bts-api/pet",
      },
      items: [
        {
          type: "doc",
          id: "bts-api/schemas/avion",
          label: "Cat",
          className: "schema",
        },
        {
          type: "doc",
          id: "bts-api/add-avion",
          label: "Add a new pet to the store",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "bts-api/update-avion",
          label: "Mettre à jour un avion",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "bts-api/get-avions",
          label: "Récupérer les avions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "bts-api/delete-avion",
          label: "Supprime un avion par son immatriculation.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Pilotes",
      link: {
        type: "doc",
        id: "bts-api/store",
      },
      items: [
        {
          type: "doc",
          id: "bts-api/create-pilot",
          label: "Créer un pilote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "bts-api/get-pilot-by-id",
          label: "Récupérer un/les pilote(s)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "bts-api/delete-pilot",
          label: "Supprimer un pilote par son ID.",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "bts-api/update-pilot",
          label: "Mettre à jour un pilote",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Hangars",
      link: {
        type: "doc",
        id: "bts-api/user",
      },
      items: [
        {
          type: "doc",
          id: "bts-api/create-hangar",
          label: "Créer un hangar",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "bts-api/update-hangar",
          label: "Modifier un hangar",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "bts-api/delete-hangar",
          label: "Supprimer un hangar",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "bts-api/get-hangar",
          label: "Recupérer les hangars",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
