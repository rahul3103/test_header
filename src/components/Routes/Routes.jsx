import React from 'react';
import { Route } from 'react-router-dom';

export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/nba" component={NBA} />
      <Route path="/nhl" component={NHL} />
      <Route path="/news" component={News} />
      <Route path="/tools" component={ComparisonTools} />
      <Route path="/videos" component={Videos} />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NBA() {
  return (
    <div>
      <h2>NBA</h2>
    </div>
  );
}

function NHL() {
  return (
    <div>
      <h2>NHL</h2>
    </div>
  );
}

function News() {
  return (
    <div>
      <h2>News</h2>
    </div>
  );
}

function ComparisonTools() {
  return (
    <div>
      <h2>ComparisonTools</h2>
    </div>
  );
}

function Videos() {
  return (
    <div>
      <h2>Videos</h2>
    </div>
  );
}
