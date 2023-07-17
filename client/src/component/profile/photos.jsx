import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./profile.css"
const Photos = ({products}) => {
    
    return (
        <div className="box-grid">
            <h3 className="photos-title">Photos</h3>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {products.map((item,i) => (
                    <ImageListItem key={i}>
                        <img
                            src={`${item.imageUrl}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.name}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>

    );
}

export default Photos