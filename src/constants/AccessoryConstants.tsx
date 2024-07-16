import img1 from '@/assets/images/BigIcon/Airpod.png'
import img2 from '@/assets/images/BigIcon/Charger.png'
import img3 from '@/assets/images/BigIcon/DanManHinh.png'
import img4 from '@/assets/images/BigIcon/Flycam.png'
import img5 from '@/assets/images/BigIcon/PlayStation.png'
import img6 from '@/assets/images/BigIcon/OpLung.png'
import img7 from '@/assets/images/BigIcon/Sacduphong.png'
import img8 from '@/assets/images/BigIcon/TheNho.png'
import img9 from '@/assets/images/BigIcon/bag.png'
import img10 from '@/assets/images/BigIcon/camera.png'
import img11 from '@/assets/images/BigIcon/gimbal.png'
import img12 from '@/assets/images/BigIcon/hub.png'
import img13 from '@/assets/images/BigIcon/keyboard.png'
import img14 from '@/assets/images/BigIcon/mayanh.png'
import img15 from '@/assets/images/BigIcon/phukien.png'
import img16 from '@/assets/images/BigIcon/phukienlap.png'
import img17 from '@/assets/images/BigIcon/router.png'
import img18 from '@/assets/images/BigIcon/sim.png'
import { StaticImageData } from 'next/image';

interface Accessory {
  image: StaticImageData | null;
  altText: string;
  name: string;
  link: string;
}

export const accessoryData: Accessory[] = [
  { image: img1, altText: 'Airpod', name: 'Phụ kiện Apple', link: '/' },
  { image: img2, altText: 'Charger', name: 'Cáp,Sạc', link: '/' },
  { image: img7, altText: 'Sacduphong', name: 'Pin, Sạc dự phòng', link: '/' },
  { image: img6, altText: 'OpLung', name: 'Ốp lưng, Bao da', link: '/' },
  { image: img3, altText: 'DanManHinh', name: 'Dán màn hình', link: '/' },
  { image: img8, altText: 'TheNho', name: 'Thẻ nhớ, USB', link: '/' },
  { image: img5, altText: 'PlayStation', name: 'Gaming Gear, Playstation', link: '/' },
  { image: img18, altText: 'Sim', name: 'Sim 4G', link: '/' },
  { image: img17, altText: 'Router', name: 'Thiết bị mạng', link: '/' },
  { image: img10, altText: 'Camera', name: 'Camera', link: '/' },
  { image: img11, altText: 'Gimbal', name: 'Gimbal', link: '/' },
  { image: img4, altText: 'Flycam', name: 'Flycam', link: '/' },
  { image: img14, altText: 'MayAnh', name: 'Máy ảnh', link: '/' },
  { image: img13, altText: 'Keyboard', name: 'Chuột,bàn phím', link: '/' },
  { image: img9, altText: 'Bag', name: 'Balo, túi xách', link: '/' },
  { image: img12, altText: 'Hub', name: 'Hub chuyển đổi', link: '/' },
  { image: img15, altText: 'PhuKien', name: 'Phụ kiện điện thoại', link: '/' },
  { image: img16, altText: 'PhuKienLap', name: 'Phụ kiện Laptop', link: '/' },
  ];