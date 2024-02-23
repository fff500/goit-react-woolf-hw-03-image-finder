import { Component } from "react";

import { SearchBar } from "components/SearchBar/SearchBar";

export class App extends Component {
  state = {

  };

  hendleSearch = () => {

  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.hendleSearch} />
      </>
    );
  }
};
