import React from 'react';
import classes from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

export function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={classes.layout}>
                <div className={classes.container}>{children}</div>
            </div>
            <Footer />
        </>
    );
}
