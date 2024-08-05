'use client'
import React from 'react'
import './style.scss';
import { StaticImageData } from 'next/image';
import { IoClose, IoCloseCircleOutline } from 'react-icons/io5';

interface ImageDetails {
    main: StaticImageData;
    colorThumb: StaticImageData;
    details: StaticImageData[];
  }
  
  // Thông tin sản phẩm
  interface ProductInfo {
    features: string[];
    boxContents: string[];
    warranty: string[];
    vat: string[];
  }
  
  // Màn hình
  interface Screen {
    features?: string[];
    type?: string[];
    size?: number;
    technology?: string[];
    frequency?: number;
    resolution?: string[];
  }
  
  // Camera sau
  interface RearCamera {
    info?: string[];
    video?: string[];
    features?: string[];
  }
  
  // Camera trước
  interface FrontCamera {
    info?: string[];
    video?: string[];
  }
  
  // Đồ họa
  interface Graphics {
    chipset?: string;
    cpuType?: string;
    gpu?: string;
  }
  
  // Kết nối
  interface Connection {
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
  
  // Lưu trữ
  interface Storage {
    ram?: number;
    memory?: number;
    memoryCardPort?: boolean;
  }
  
  // Pin và sạc
  interface Charge {
    battery?: number;
    tech?: string[];
    port?: string[];
  }
  
  // Thiết kế
  interface Design {
    size?: string[];
    weight?: number;
    backMaterial?: string[];
    frameMaterial?: string[];
  }
  
  // Công nghệ khác
  interface SideTech {
    waterproof?: string[];
    specs?: string[];
    additional?: string[];
    sound?: string[];
  }
  
  // Tính năng đặc biệt
  interface Handy {
    fingerprintSensor?: boolean;
    sensors?: string[];
    specialFeatures?: string[];
  }
  
  // Thông tin chung
  interface General {
    releaseDate?: string[];
  }
  
  // Thông tin chi tiết sản phẩm
  interface Info {
    productInfo: ProductInfo;
    usage: string[];
    productType: string;
    chip: string;
    cameraFeatures: string[];
    manufacturer: string;
    currentStatus: string[];
    screen: Screen;
    rearCamera: RearCamera;
    frontCamera: FrontCamera;
    graphics: Graphics;
    connection: Connection;
    storage: Storage;
    charge: Charge;
    design: Design;
    sideTech: SideTech;
    handy: Handy;
    general: General;
  }
  
  // Dữ liệu iPhone
  interface IphoneData {
    id: string;
    img: ImageDetails;
    name: string;
    newPrice: number;
    oldPrice: number;
    sale?: boolean;
    payWay?: number;
    discount?: number;
    description: string;
    rating?: number;
    loved?: boolean;
    suggest?: boolean;
    available?: boolean;
    info: Info;
}

interface DetailModalProps {
    item: IphoneData;
    onClose: () => void;
  }
  
  const DetailModal = ({ item, onClose }: DetailModalProps) => {
    const {
      screen,
      rearCamera,
      frontCamera,
      graphics,
      connection,
      storage,
      charge,
      design,
      sideTech,
      handy,
      general
    } = item.info;

    const renderList = (items: string[] | undefined, title: string) => (
        <div className={`detail-${title.toLowerCase()} detail-item-child`}>
          <p>{title}</p>
          <ul className='child-list'>
            {items && items.length > 0 ? (
              items.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>N/A</li>
            )}
          </ul>
        </div>
    );
  
    // Màn hình
    const screenSize = screen?.size || 'N/A';
    const screenTech = screen?.technology?.join(', ') || 'N/A';
    const screenResolution = screen?.resolution?.join(', ') || 'N/A';
    const screenFeatures = screen?.features?.join(', ') || 'N/A';
    const screenFrequency = screen?.frequency || 'N/A';
    const screenType = screen?.type?.join(', ') || 'N/A';
    
    // Camera sau
    const rearInfo = rearCamera?.info?.join(', ') || 'N/A';
    const rearVideo = rearCamera?.video?.join(', ') || 'N/A';
    const rearFeatures = rearCamera?.features?.join(', ') || 'N/A';
  
    // Camera trước
    const frontCameraInfo = frontCamera?.info?.join(', ') || 'N/A';
    const frontVideo = frontCamera?.video?.join(', ') || 'N/A';
  
    // Đồ họa
    const chipset = graphics?.chipset || 'N/A';
    const cpuType = graphics?.cpuType || 'N/A';
    const gpu = graphics?.gpu || 'N/A';
  
    // Kết nối
    const nfc = connection?.nfc?.join(', ') || 'N/A';
    const sim = connection?.sim?.join(', ') || 'N/A';
    const os = connection?.os?.join(', ') || 'N/A';
    const headphones = connection?.headphones?.join(', ') || 'N/A';
    const infrared = connection?.infrared?.join(', ') || 'N/A';
    const wifi = connection?.wifi?.join(', ') || 'N/A';
    const bluetooth = connection?.bluetooth?.join(', ') || 'N/A';
    const network = connection?.network?.join(', ') || 'N/A';
    const gps = connection?.gps?.join(', ') || 'N/A';
  
    // Lưu trữ
    const ram = storage?.ram || 'N/A';
    const memory = storage?.memory || 'N/A';
    const memoryCardPort = storage?.memoryCardPort ? 'Có' : 'Không';
  
    // Pin và sạc
    const battery = charge?.battery || 'N/A';
    const chargeTech = charge?.tech?.join(', ') || 'N/A';
    const chargePort = charge?.port?.join(', ') || 'N/A';
  
    // Thiết kế
    const size = design?.size?.join(', ') || 'N/A';
    const weight = design?.weight || 'N/A';
    const backMaterial = design?.backMaterial?.join(', ') || 'N/A';
    const frameMaterial = design?.frameMaterial?.join(', ') || 'N/A';
  
    // Công nghệ khác
    const waterproof = sideTech?.waterproof?.join(', ') || 'N/A';
    const specs = sideTech?.specs?.join(', ') || 'N/A';
    const additional = sideTech?.additional?.join(', ') || 'N/A';
    const sound = sideTech?.sound?.join(', ') || 'N/A';
  
    // Tính năng đặc biệt
    const fingerprintSensor = handy?.fingerprintSensor ? 'Có' : 'Không';
    const sensors = handy?.sensors?.join(', ') || 'N/A';
    const specialFeatures = handy?.specialFeatures?.join(', ') || 'N/A';
  
    // Thông tin chung
    const releaseDate = general?.releaseDate?.join(', ') || 'N/A';
  
    return (
        <div className="modal-container" onClick={onClose}>
            <div className="detail-header">
                <p className='detail-header-title'>Thông số kỹ thuật</p>
                <IoCloseCircleOutline className="detail-header-close-modal" onClick={onClose} />
            </div>
            <div className='info-detail-modal' onClick={(e) => e.stopPropagation()}>
                <div className="detail-list">
                    {/* Màn hình */}
                    <div className="detail-screen detail-name">
                        <div className="detail-screen-title item-title">Màn hình</div>
                        <div className="detail-screen-list detail-item">
                            {renderList(screen?.features, 'Tính năng màn hình')}
                            <div className='detail-screen-size detail-item-child'>
                                <p>Kích thước màn hình</p>
                                <span>{screen?.size || 'N/A'} inches</span>
                            </div>
                            <div className='detail-screen-tech detail-item-child'>
                                <p>Công nghệ màn hình</p>
                                <span>{screen?.technology?.join(', ') || 'N/A'}</span>
                            </div>
                            <div className='detail-screen-resolution detail-item-child'>
                                <p>Độ phân giải màn hình</p>
                                <span>{screen?.resolution?.join(', ') || 'N/A'}</span>
                            </div>
                            <div className='detail-screen-frequency detail-item-child'>
                                <p>Tần số quét</p>
                                <span>{screen?.frequency || 'N/A'}</span>
                            </div>
                            <div className='detail-screen-type detail-item-child'>
                                <p>Kiểu màn hình</p>
                                <span>{screen?.type?.join(', ') || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Camera sau */}
                    <div className="detail-rear-camera detail-name">
                        <div className="detail-rear-camera-title item-title">Camera Sau</div>
                        <div className="detail-rear-list detail-item">
                            {renderList(rearCamera?.info, 'Thông tin camera sau')}
                            {renderList(rearCamera?.video, 'Quay video')}
                            {renderList(rearCamera?.features, 'Tính năng camera sau')}
                        </div>
                    </div>

                    {/* Camera trước */}
                    <div className="detail-front-camera detail-name">
                        <div className="detail-front-camera-title item-title">Camera Trước</div>
                        <div className="detail-front-camera-list detail-item">
                            {renderList(frontCamera?.info, 'Thông tin camera trước')}
                            {renderList(frontCamera?.video, 'Quay video')}
                        </div>
                    </div>

                    {/* Đồ họa */}
                    <div className="detail-graphics detail-name">
                        <div className="detail-graphics-title item-title">Vi xử lý & Đồ Họa</div>
                        <div className="detail-graphics-list detail-item">
                            <div className='detail-chipset detail-item-child'>
                                <p>Chipset</p>
                                <span>{graphics?.chipset || 'N/A'}</span>
                            </div>
                            <div className='detail-cpu-type detail-item-child'>
                                <p>Loại CPU</p>
                                <span>{graphics?.cpuType || 'N/A'}</span>
                            </div>
                            <div className='detail-gpu detail-item-child'>
                                <p>GPU</p>
                                <span>{graphics?.gpu || 'N/A'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Kết nối */}
                    <div className="detail-connection detail-name">
                        <div className="detail-connection-title item-title">Giao tiếp & Kết nối</div>
                        <div className="detail-connection-list detail-item">
                            {renderList(connection?.nfc, 'NFC')}
                            {renderList(connection?.sim, 'SIM')}
                            {renderList(connection?.os, 'Hệ điều hành')}
                            {renderList(connection?.headphones, 'Jack tai nghe')}
                            {renderList(connection?.infrared, 'Hồng ngoại')}
                            {renderList(connection?.wifi, 'Wifi')}
                            {renderList(connection?.bluetooth, 'Bluetooth')}
                            {renderList(connection?.network, 'Mạng')}
                            {renderList(connection?.gps, 'GPS')}
                        </div>
                    </div>

                    {/* Lưu trữ */}
                    <div className="detail-storage detail-name">
                        <div className="detail-storage-title item-title">RAM & Lưu trữ</div>
                        <div className="detail-storage-list detail-item">
                            <div className='detail-ram detail-item-child'>
                                <p>RAM</p>
                                <span>{storage?.ram || 'N/A'} GB</span>
                            </div>
                            <div className='detail-memory detail-item-child'>
                                <p>Bộ nhớ trong</p>
                                <span>{storage?.memory || 'N/A'} GB</span>
                            </div>
                            <div className='detail-memory-card-port detail-item-child'>
                                <p>Thẻ nhớ</p>
                                <span>{storage?.memoryCardPort ? 'Có' : 'Không'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Pin và sạc */}
                    <div className="detail-charge detail-name">
                        <div className="detail-charge-title item-title">Pin và Công nghệ sạc</div>
                        <div className="detail-charge-list detail-item">
                            <div className='detail-battery detail-item-child'>
                                <p>Dung lượng pin</p>
                                <span>{charge?.battery || 'N/A'} mAh</span>
                            </div>
                            {renderList(charge?.tech, 'Công nghệ sạc')}
                            {renderList(charge?.port, 'Cổng sạc')}
                        </div>
                    </div>

                    {/* Thiết kế */}
                    <div className="detail-design detail-name">
                        <div className="detail-design-title item-title">Thiết kế và Trọng lượng</div>
                        <div className="detail-design-list detail-item">
                            {renderList(design?.size, 'Kích thước')}
                            <div className='detail-weight detail-item-child'>
                                <p>Trọng lượng</p>
                                <span>{design?.weight || 'N/A'} g</span>
                            </div>
                            {renderList(design?.backMaterial, 'Chất liệu mặt lưng')}
                            {renderList(design?.frameMaterial, 'Chất liệu khung viền')}
                        </div>
                    </div>

                    {/* Công nghệ khác */}
                    <div className="detail-side-tech detail-name">
                        <div className="detail-side-tech-title item-title">Thông số khác</div>
                        <div className="detail-side-tech-list detail-item">
                            {renderList(sideTech?.waterproof, 'Chống nước')}
                            {renderList(sideTech?.specs, 'Thông số kỹ thuật khác')}
                            {renderList(sideTech?.additional, 'Thêm')}
                            {renderList(sideTech?.sound, 'Âm thanh')}
                        </div>
                    </div>

                    {/* Tính năng đặc biệt */}
                    <div className="detail-handy detail-name">
                        <div className="detail-handy-title item-title">Tiện ích khác</div>
                        <div className="detail-handy-list detail-item">
                            <div className='detail-fingerprint-sensor detail-item-child'>
                                <p>Cảm biến vân tay</p>
                                <span>{handy?.fingerprintSensor ? 'Có' : 'Không'}</span>
                            </div>
                            {renderList(handy?.sensors, 'Cảm biến khác')}
                            {renderList(handy?.specialFeatures, 'Tính năng đặc biệt')}
                        </div>
                    </div>

                    {/* Thông tin chung */}
                    <div className="detail-general detail-name">
                        <div className="detail-general-title item-title">Thông tin chung</div>
                        <div className="detail-general-list detail-item">
                            {renderList(general?.releaseDate, 'Ngày phát hành')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                    <button className='close-modal-btn' onClick={onClose}><IoClose /> Đóng</button>
            </div>
        </div>
    );
  };
  
  export default DetailModal;