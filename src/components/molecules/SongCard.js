import React from 'react';

const SongCard = ({imgsrc ,text }) => {
	return (
		<div className="col-md-4">
			<div className="song-card margin-bottom">
				<img src={imgsrc} />
				<div className="container">
					<div className="text">{text}</div>
				</div>
			</div>
		</div>
	);
}

export default SongCard;