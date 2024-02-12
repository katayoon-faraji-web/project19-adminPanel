'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide,Navigation,Pagination ,Scrollbar,A11y} from 'swiper/react';
import '../../node_modules/swiper/swiper.css';

 const Carousel = () => {
  return (
    <Swiper 

        scrollbar={{ draggable: true }}
      spaceBetween={250}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><SliderContent s={'https://riday-admin-template.multipurposethemes.com/bs5/images/avatar/2.jpg'} name='mical doe' lastseen='1 day ago' comment={'My Friend & I both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back'} pic={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/dish-2.png'}/></SwiperSlide>
      <SwiperSlide><SliderContent s={'https://riday-admin-template.multipurposethemes.com/bs5/images/avatar/1.jpg'} name='lucy doe' lastseen='3 day ago' comment={'My Friend & I both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back'} pic={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/dish-5.png'}/></SwiperSlide>
      <SwiperSlide><SliderContent s={'https://riday-admin-template.multipurposethemes.com/bs5/images/avatar/3.jpg'}  name='david doe' lastseen='2 day ago' comment={'My Friend & I both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back'} pic={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/dish-3.png'}/></SwiperSlide>
      <SwiperSlide><SliderContent s={'https://riday-admin-template.multipurposethemes.com/bs5/images/avatar/4.jpg'} name='sarah doe' lastseen='1 day ago' comment={'My Friend & I both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back'} pic={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/dish-4.png'}/></SwiperSlide>
      <SwiperSlide><SliderContent s={'https://riday-admin-template.multipurposethemes.com/bs5/images/avatar/5.jpg'} name='john doe' lastseen='4 day ago' comment={'My Friend & I both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back'} pic={'https://riday-admin-template.multipurposethemes.com/bs5/images/food/dish-5.png'}/></SwiperSlide>
   
    </Swiper>
  );
};
export default Carousel

const SliderContent = ({s,name,lastseen,comment,pic}) =>{
    return(
        <div className='w-[330px] h-[300px] relative p-4 bg-[#24292d] rounded-lg flex flex-wrap justify-start content-center'>
            <div className='w-full h-[20%] flex flex-wrap justify-start content-center'>
                <div className='w-full flex justify-start items-center'>
                    <Image className='rounded-full' width={40} height={40} alt='pic' src={s}/>
                    <div className='w-[50%] h-full  ml-2 flex flex-wrap justify-start content-center'>
                        <span className='flex w-full'>{name}</span>
                        <span className='flex w-full text-[12px]'>{lastseen}</span>
                    </div>
                </div>
            </div>
            <div className='w-[70%] h-[80%] flex flex-wrap justify-start content-center'>
                <p className='w-full flex justify-start text-[12px]'>{comment}</p>
                <div className='w-full flex justify-start mt-4'>
                    <HoverRating/>
                </div>
            </div>
            <Image className='absolute top-[20%] -right-[50px] rounded-full' width={150} height={150} alt='pic' src={pic}/>
        </div>
    )
}


// ***********************
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  function HoverRating() {
      const [value, setValue] = React.useState(3.5);
      const [hover, setHover] = React.useState(-1);
    
      return (
        <Box
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      );
    }