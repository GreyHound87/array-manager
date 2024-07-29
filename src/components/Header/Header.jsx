import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

export function Header() {
    return (
        <header className={classes.header}>
            <h1>Array Manager SPA</h1>
            <nav className={classes.nav}>
                <Link to="/" className={classes.tab}>
                    Solution 1
                </Link>
                <Link to="/solution2" className={classes.tab}>
                    Solution 2
                </Link>
            </nav>
            {/* Здесь должно быть описание ТЗ
            (принимает массив объектов с id и должна вернуть объект, у которого есть метод, возвращающий
            этот массив отсортированным и защищенным от изменений.) */}
            {/* кнопки включающие выполнение скрипта с массивами разной длины например 100, 1000, 10000
            + должно запускаться измерение времени затраченное на выполнение задачи */}
        </header>
    );
}
