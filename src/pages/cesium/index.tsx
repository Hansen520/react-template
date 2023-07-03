import { useRef, useEffect } from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import styles from './index.module.less';
import { Cartesian3, Viewer as CesiumViewer, ConstantProperty } from 'cesium';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ODljNjFlZC02NmJhLTQxMTEtOGM4Yy03NmQwY2UwZWJiOGUiLCJpZCI6MTI3NDc0LCJpYXQiOjE2NzgwOTkwMTF9.CN3BFfFoQ4V8FQPHxwKhajMba064ExBnWvIdco0_vR8';

const CesiumLayout = () => {
  const cesiumContainer: any = useRef(null);

  useEffect(() => {
    if (!cesiumContainer) {
      return;
    }
    // 在组件加载后创建Cesium Viewer
    const viewer: any = new Cesium.Viewer(cesiumContainer.current, {
      shadows: false, // 显示模型阴影
      selectionIndicator: false,
      requestRenderMode: true,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      navigationHelpButton: false,
      vrButton: false, // 右下角vr按钮  
    });
    // viewer.scene.skyBox.show = false; // 天空盒
    console.log(viewer, 48);
    viewer.scene.globe.show = true;
    const position = Cesium.Cartesian3.fromDegrees(116.39, 39.9, 1500)
    /* 1设置中心点及camera的位置 */
    viewer.scene.camera.setView({
      destination: position,
      /* 增加相机 */
      // orientation: {
      //   heading: Cesium.Math.toRadians(0),
      //   pitch: Cesium.Math.toRadians(-90),
      //   roll: 0
      // }
    })

    /* 2fly飞行时间 */
    // viewer.camera.flyTo({
    //   destination: position,
    //   orientation: {
    //     heading: Cesium.Math.toRadians(0),
    //     pitch: Cesium.Math.toRadians(-90),
    //     roll: 0
    //   },
    //   duration: 5
    // })

    /* 3增加点 */
    // const entity = viewer.entities.add({
    //   position: Cesium.Cartesian3.fromDegrees(116.39, 39.91, 200),
    //   point: {
    //     pixelSize: 20,
    //     color: new Cesium.Color(0, 1, 0, 1)
    //   }
    // });
    // viewer.trackedEntity = entity

    /* 4lookAt只在当前区域旋转查看 */
    // const heading = Cesium.Math.toRadians(50);
    // const pitch = Cesium.Math.toRadians(-90);
    // const range = 2500;
    // viewer.camera.lookAt(position, new Cesium.HeadingPitchRange(heading, pitch, range));

  }, [])
  return (
    <div ref={cesiumContainer} className={styles.container} />
  );
}

export default CesiumLayout;
