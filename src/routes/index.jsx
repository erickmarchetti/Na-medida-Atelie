import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import Cadastrar from "../pages/Cadastrar"
import Login from "../pages/Login"
import PainelAdmin from "../pages/PainelAdmin"
import PainelUsuario from "../pages/PainelUsuario"
import Pedidos from "../pages/Pedidos"
import Avaliacoes from "../pages/Avaliacoes"

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/register">
                <Cadastrar />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/painel">
                <PainelUsuario />
            </Route>
            <Route exact path="/pedidos">
                <Pedidos />
            </Route>
            <Route exact path="/avaliacoes">
                <Avaliacoes />
            </Route>
            <Route exact path="/admin">
                <PainelAdmin />
            </Route>
        </Switch>
    )
}

export default Routes
