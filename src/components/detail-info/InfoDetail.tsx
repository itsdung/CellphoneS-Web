'use client'
import React from 'react'
import './style.scss';
import { StaticImageData } from 'next/image';
import { GoChevronDown } from 'react-icons/go';

interface SubImage {
    colorThumb: StaticImageData;
    detail: StaticImageData[];
}

interface SubInfo {
    productfeatures: string[];
    boxfeatures: string[];
    warranty: string[];
    vat: string[];
}

interface SubScreen {
    screenFeatures?: string[];
    screenType?: string[];
    screenSize?: number;
    screenTech?: string[];
    screenFrequency?: number;
    screenResolution?: string[];
}

interface SubRearCamera {
    rearInfo?: string[];
    rearVideo?: string[];
    rearFeatures?: string[];
}

interface SubFrontCamera {
    frontInfo?: string[];
    frontVideo?: string[];
    frontFeatures?: string[];
}

interface SubGraphic {
    chipset?: string;
    cpuType?: string;
    gpu?: string;
}

interface SubConection {
    nfc?: string[];
    sim?: string[];
    os?: string[];
    headphones?: string[];
    infrared?: string[];
    wifi?: string[];
    bluetooth?: string[];
    network?: string[];
    gps?: string[];
}

interface SubStore {
    ram?: number;
    memory?: number;
    memoryCardPort?: boolean;
}

interface SubCharge {
    battery?: number;
    chargeTech?: string[];
    chargePort?: string[];
}

interface SubDesign {
    size?: string[];
    weight?: number;
    backMaterial?: string[];
    frameMaterial?: string[];
}

interface SubSideTech {
    waterproof?: string[];
    specTech?: string[];
    anotherTech?: string[];
    soundTech?: string[];
}

interface SubHandy {
    fprintsensor?: boolean;
    sensor?: string[];
    specialFeatures?: string[];
}

interface SubGeneral {
    releaseDate?: string[];
}

interface Item {
    id: string;
    img: StaticImageData;
    subImage?: SubImage[];

    name: string;
    newpri: number;
    oldpri: number;
    sale?: boolean;
    payway?: number;
    discount?: number;
    desc: string;
    rating?: number;
    loved?: boolean;
    suggest?: boolean;
    available?: boolean;

    productinfo?: string;
    subInfo?: SubInfo[];

    use?: string[];
    productType?: string;
    chip?: string;
    cameraFeatures?: string[];
    manufacturer?: string;
    currentStatus?: string[];

    screen?: string;
    subScreen?: SubScreen[];

    rearCamera?: string;
    subRearCamera?: SubRearCamera[];

    frontCamera?: string;
    subFrontCamera?: SubFrontCamera[];
    
    graphic?: string;
    subGraphic?: SubGraphic[];

    conection?: string;
    subConection?: SubConection[];

    store?: string;
    subStore?: SubStore[];

    charge?: string;
    subCharge?: SubCharge[];

    design?: string;
    subDesign?: SubDesign[];

    sideTech?: string;
    subSideTech?: SubSideTech[];

    handy?: string;
    subHandy?: SubHandy[];

    general?: string;
    subGeneral?: SubGeneral[];
}

const InfoDetail = ({ item }: { item: Item }) => {
    
  const rearInfo = item.subRearCamera?.[0]?.rearInfo?.join(', ') || 'N/A';
  const chipset = item.subGraphic?.[0]?.chipset || 'N/A';
  const nfc = item.subConection?.[0]?.nfc?.join(', ') || 'N/A';
  const ram = item.subStore?.[0]?.ram || 'N/A';
  const memory = item.subStore?.[0]?.memory || 'N/A';
  const battery = item.subCharge?.[0]?.battery || 'N/A';
  const sim = item.subConection?.[0]?.sim?.join(', ') || 'N/A';
  const os = item.subConection?.[0]?.os?.join(', ') || 'N/A';
  const screenResolution = item.subScreen?.[0]?.screenResolution?.join(', ') || 'N/A';
  const screenFeatures = item.subScreen?.[0]?.screenFeatures?.join(', ') || 'N/A';
  const screenSize = item.subScreen?.[0]?.screenSize || 'N/A';
  const screenTech = item.subScreen?.[0]?.screenTech?.join(', ') || 'N/A';
  const frontCameraInfo = item.subFrontCamera?.[0]?.frontInfo?.join(', ') || 'N/A';

  return (
    <div className='info-detail'>
      <p className='info-detail-title'>Thông số kỹ thuật</p>
        <ul className="detail-list">
            <li className='detail-list-item detail-screen-size'>
                <p>Kích thước màn hình</p>
                <span>{screenSize} inches</span>
            </li>
             <li className='detail-list-item detail-screen-tech'>
                <p>Công nghệ màn hình</p>
                <span>{screenTech}</span>
            </li>
            <li className="detail-list-item detail-rear-camera">
                <p>Camera sau</p>
                <span>{rearInfo}</span>
            </li>
            <li className="detail-list-item detail-front-camera">
                <p>Camera trước</p>
                <span>{frontCameraInfo}</span>
            </li>
            <li className="detail-list-item detail-chipset">
                <p>Chipset</p>
                <span>{chipset}</span>
            </li>
            <li className="detail-list-item detail-nfc">
                <p>Công nghệ NFC</p>
                <span>{nfc}</span>
            </li>
            <li className="detail-list-item detail-ram">
                <p>RAM</p>
                <span>{ram} GB</span>
            </li>
            <li className='detail-list-item detail-memory'>
                <p>Bộ nhớ trong</p>
                <span>{memory} GB</span>
            </li>
            <li className="detail-list-item detail-charge">
                <p>Pin</p>
                <span>{battery} mAh</span>
            </li>
            <li className="detail-list-item detail-sim">
                <p>Thẻ sim</p>
                <span>{sim}</span>
            </li>
            <li className='detail-list-item detail-os'>
                <p>Hệ điều hành</p>
                <span>{os}</span>
            </li>
            <li className='detail-list-item detail-screen-resolution'>
                <p>Độ phân giải màn hình</p>
                <span>{screenResolution}</span>
            </li>
            <li className='detail-list-item detail-screen-features'>
                <p>Tính năng màn hình</p>
                <span>{screenFeatures}</span>
            </li>
      </ul>
      <button className='full-detail-btn'>Xem cấu hình chi tiết <GoChevronDown /></button>
    </div>
  );
  }
  
  export default InfoDetail;
