import {Header} from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FlashMessages } from './FlashMessages'
import { Page } from "./Page";
import {Sign} from "../../user-authentication/components/Sign";
import {Account} from "../../user-authentication/components/Account";
import {ProjectDashboard} from "../../project/components";
import {CreateProject} from "../../project/components/CreateProject.tsx";

export const App = () => {
  return (<Page>
    <BrowserRouter>
      <FlashMessages />
      <Header />
        <Routes>
          <Route path="/signin" element={<Sign />}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/my-project" element={<ProjectDashboard/>}/>
          <Route path="/create-project" element={<CreateProject />}/>
        </Routes>
    </BrowserRouter>
  </Page>)
}