import { Navigate } from "react-router-dom";

/****Layouts*****/
import FullLayout from "../layouts/FullLayout";

/***** Pages ****/
import Viggie from "../views/acceuil/acceuil";
import About from "../views/About";
import RecipeDetails from "../views/recette/recette";
import RecipeForm from "../views/recette/create";
import Grid from "../views/ui/Grid";
import Tables from "../views/ui/Tables";
import Forms from "../views/ui/Forms";
import Breadcrumbs from "../views/ui/Breadcrumbs";
import Plats from "../views/plats/Plats";
import DetailRecipes from "../views/recette/detailRecipes";
import UpdateRecipes from "../views/recette/updateRecipe";
import ListPlats from "../views/plats/ListPlats";

/*****Routes******/
const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/accueil" />
      },
      {
        path: "/accueil",
        exact: true,
        element: <Viggie />
      },
      {
        path: "/about",
        exact: true,
        element: <About />
      },
      {
        path: "/recette",
        exact: true,
        element: <RecipeDetails />
      },
      {
        path: "/recipe/details/:id",
        exact: true,
        element: <DetailRecipes />
      },
      {
        path: "/update/recipes/:id",
        exact: true,
        element: <UpdateRecipes />
      },
      {
        path: "/create",
        exact: true,
        element: <RecipeForm />
      },
      {
        path: "/plats",
        exact: true,
        element: <Plats />
      },
      {
        path: "details/list/:id",
        exact: true,
        element: <ListPlats />
      },
      {
        path: "/grid",
        exact: true,
        element: <Grid />
      },
      {
        path: "/table",
        exact: true,
        element: <Tables />
      },
      {
        path: "/forms",
        exact: true,
        element: <Forms />
      },
      {
        path: "/breadcrumbs",
        exact: true,
        element: <Breadcrumbs />
      },

    ],
  },
];

export default ThemeRoutes;
