import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSongs, getSearch } from '../redux/actions/songs';
import search from '../selectors/search';
import Songs from '../components/organisms/Songs';

function Main(props) {
  const [search, setSearch] = useState('');
  const [songCategory, setSongCategory] = React.useState('top-albums');

  const onSelect = (event) => {
    setSongCategory(event.target.value);
  }

  const onChange = (event) => {   
    props.getSearch(event.target.value);
    setSearch(event.target.value);
  }

  useEffect(() => {
    props.getSongs(songCategory)
  }, [songCategory]);

  return (
    <Songs seleceDefaultValue={songCategory} searchText={search} onSearch={onChange} onSelect={onSelect} songs={props.songs} />
  );
}

function mapStateToProps(state) {
  return {
    songs: search(state)
  };
}

export default connect(mapStateToProps, { getSongs, getSearch })(Main);
