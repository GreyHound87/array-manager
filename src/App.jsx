import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Solution1, Solution2 } from './components';

export function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="*"
                    element={
                        <Layout>
                            <Routes>
                                <Route index element={<Solution1 />} />
                                <Route path="/solution2" element={<Solution2 />} />
                            </Routes>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}
