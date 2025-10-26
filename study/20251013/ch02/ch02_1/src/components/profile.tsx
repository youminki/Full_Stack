import React from 'react';

const getRandomImageUrl = (width: number = 200, height: number = 200) => {
	return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
};

const Profile = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h2>임시 프로필 이미지</h2>
					<img src={getRandomImageUrl()} alt="랜덤 프로필" style={{ borderRadius: '50%' }} />
					<div style={{ marginTop: '16px' }}>
						<a href="https://unsplash.com/photos/AaEQmoufHLk" target="_blank" rel="noopener noreferrer">
							Unsplash 예시 이미지
						</a>
					</div>
		</div>
	);
};

export default Profile;


