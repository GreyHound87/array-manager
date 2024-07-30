import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Intro, Solution1, Solution2, Solution3 } from './components';

export function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="*"
                    element={
                        <Layout>
                            <Routes>
                                <Route index element={<Intro />} />
                                <Route path="/solution1" element={<Solution1 />} />
                                <Route path="/solution2" element={<Solution2 />} />
                                <Route path="/solution3" element={<Solution3 />} />
                            </Routes>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}
