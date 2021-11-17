
import React, {Suspense} from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

const Header = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit" component={RouterLink} to="/">{t("home")}</Button>
            <br />
            <Button color="inherit" component={RouterLink} to="/about">{t("about")}</Button>
            <Button color="inherit" onClick={() => changeLanguage("fi")}>fi</Button>
            <Button color="inherit" onClick={() => changeLanguage("en")}>en</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default function App() {
    return (
        <Suspense fallback="loading">
            <Header />
        </Suspense>
    )
}


