import * as React from "react";
import { render } from "react-dom";

import { GraphiQL } from "graphiql";

import "graphiql/graphiql.min.css";
import { createGraphiQLFetcher } from "@graphiql/toolkit";

import "./index.css";

const URL = "https://api.spacex.land/graphql";

const graphQLFetcher = createGraphiQLFetcher({
  url: URL
});

const container = document.getElementById("graphiql");

render(<GraphiQL fetcher={graphQLFetcher} />, container);
