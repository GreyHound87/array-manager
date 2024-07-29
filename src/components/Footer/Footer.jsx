import React from 'react';
import classes from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={classes.footer}>
            результаты
            {/* сюда будем выводить результаты(время) выполнение скрипта с массивами разной длинны
            например 100, 1000, 10000 */}
        </footer>
    );
}
