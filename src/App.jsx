import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Intro, Solution1, Solution2, Solution3, Solution4, Solution5, Solution6 } from './components';

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
                                <Route path="/solution4" element={<Solution4 />} />
                                <Route path="/solution5" element={<Solution5 />} />
                                <Route path="/solution6" element={<Solution6 />} />
                            </Routes>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}
