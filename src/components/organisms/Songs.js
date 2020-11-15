import React from 'react';
import Heading from '../atoms/Heading';
import Select from '../atoms/Select';
import SongCard from '../molecules/SongCard';
import SearchBar from '../molecules/SearchBar';
import Loading from '../atoms/Loading';
import { SONG_CATEGORIES } from '../../constants';
import './songs.css';

const Songs = ({ seleceDefaultValue, searchText, onSearch, onSelect, songs }) => {
	return (
		<div className="songs">
			<div className="row">
				<Heading text='Select Songs Category' />
				<Select defaultValue={seleceDefaultValue} onChange={onSelect} options={SONG_CATEGORIES} />
			</div>
			<div className="row">
				<SearchBar value={searchText} label='Search' placeholder='Search By Artist Name Or Song Name' onChange={onSearch} />
			</div>
			<div className="row">
				<Heading text={`${songs.length} Results Found`} />
				{ songs.length ?
					songs.map((song, index) => (
						<SongCard key={index} imgsrc={song.artworkUrl100} text={song.artistName || song.name} />
					))
					: <Loading />
				}
			</div>
		</div>
	);
}

export default Songs;
