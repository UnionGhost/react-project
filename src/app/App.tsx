import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import './styles/index.scss';
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, toggleTheme, anotherTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} style={{padding: '20px', display: 'block'}}>{anotherTheme}</button>
            <Link to={'./'}>Main</Link>
            <Link to={'./about'}>About</Link>
            <AppRouter/>
        </div>
    );
};

export default App;