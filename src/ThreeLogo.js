import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import {isMobile, isTablet} from "react-device-detect"

// import
// import broken_logo_3d from "./assets/logo.gltf";

let Logo;
let icoshadron;
let hemiLight;




const ThreeLogo = () => {
    useEffect(() => {
        const canvas = document.getElementById("three-animation");
        if (canvas) {
            const scene = new THREE.Scene();

            // Fog

            scene.fog = new THREE.FogExp2(0x909090, 0.007);

            // Rings & Electrons
            const T1 = new THREE.TorusGeometry(48, 0.025, 30, 128);
            const M = new THREE.MeshBasicMaterial({ color: 0xe0e0e0 });
            const torus1 = new THREE.Mesh(T1, M);

            // Electron
            const E1 = new THREE.SphereGeometry(0.3, 16, 16);
            const EM = new THREE.MeshBasicMaterial({ color: 0xa9a9a9 });
            const Elec1 = new THREE.Mesh(E1, EM);
            Elec1.position.x = 47;
            Elec1.position.y = 9.5;

            const group1 = new THREE.Group();
            group1.add(torus1);
            group1.add(Elec1);

            const T2 = new THREE.TorusGeometry(19, 0.03, 30, 128);
            const torus2 = new THREE.Mesh(T2, M);
            // Electron
            const Elec2 = new THREE.Mesh(E1, EM);
            Elec2.position.x = 35.75;
            Elec2.position.y = 9.5;

            const group2 = new THREE.Group();
            group2.add(torus2);
            group2.add(Elec2);

            const T3 = new THREE.TorusGeometry(29, 0.03, 30, 128);
            const torus3 = new THREE.Mesh(T3, M);

            const Elec3 = new THREE.Mesh(E1, EM);
            Elec3.position.x = 27.5;
            Elec3.position.y = 9.5;

            const group3 = new THREE.Group();
            group3.add(torus3);
            group3.add(Elec3);

            const T4 = new THREE.TorusGeometry(37, 0.03, 30, 128);
            const torus4 = new THREE.Mesh(T4, M);

            const Elec4 = new THREE.Mesh(E1, EM);
            Elec4.position.x = 16.5;
            Elec4.position.y = 9.5;

            const group4 = new THREE.Group();
            group4.add(torus4);
            group4.add(Elec4);

            const gltfloader = new GLTFLoader();

            const logogroup = new THREE.Group();
            scene.add(logogroup);

            // const InitLogoPosX= 19.5;
            // logogroup.position.x =InitLogoPosX;

            // const InitLogoPosY= -6;
            // logogroup.position.y =InitLogoPosY;

           

            // InitLogoScale.minValue = 0;

            const main_group = new THREE.Group();
            main_group.add(group1, group2, group3, group4);
            scene.add(main_group);

            // Desktop Keyframes
            const keyframes_desktop = [
                {
                    //Desktop View
                    //homepage
                    position: {
                        x: 32.4,
                        y: -13.4,
                        z: -15,
                    },
                    rotation: {
                        x: Math.PI / 2 - Math.PI / 90,
                        y: Math.PI / 9,
                        z: 0,
                    },
                    atom_scale: 0.5,
                    logo_scale: 1.65,
                    // scale: {x: 0.5, y: 1.65},
                    scroll: 0,
                },
                {
                    //product
                    position: {
                        x: -25,
                        y: -10,
                        z: -15,
                    },
                    rotation: {
                        x: Math.PI / 2 - Math.PI / 90,
                        y: -Math.PI / 9,
                        z: Math.PI / 4,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale: { x:1, y: 0},
                    scroll: 0.2,
                },
                {
                    //feature
                    position: {
                        x: 24,
                        y: -1,
                        z: -15,
                    },
                    rotation: {
                        x: Math.PI / 2 - Math.PI / 90,
                        y: Math.PI / 9,
                        z: Math.PI / 4,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale: {x:1, y: 0},
                    scroll: 0.4,
                },
                {
                    //about
                    position: {
                        x: -60,
                        y: -9,
                        z: -15,
                    },
                    rotation: {
                        x: 1.565 - Math.PI / 40,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 2.5,
                    logo_scale: 0,
                    // scale: {x:2.5, y: 0},
                    scroll: 0.66,
                },
                {
                    //career
                    position: {
                        x: 24,
                        y: -1,
                        z: -15,
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale:{x: 1, y: 0},
                    scroll: 0.84,
                },
                {
                    //career
                    position: {
                        x: 24,
                        y: -5,
                        z: -15,
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale:{x: 0, y: 0},
                    scroll: 0.85,
                },
                {
                    //career
                    position: {
                        x: 24,
                        y: -20,
                        z: -15,
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 0,
                    logo_scale: 0,
                    // scale:{x: 0, y: 0},
                    scroll: 1,
                },
            ];
            

            // Tablet Keyframes
            const keyframes_tablet = [
                {
                    //homepage
                    position: {
                        x: 1.6,
                        y: 3.6,
                        z: -15,
                    },
                    rotation: {
                        x: Math.PI / 2 + Math.PI / 10,
                        y: Math.PI / 9,
                        z: 0,
                    },
                    atom_scale: 0.3,
                    logo_scale: 1,
                    // scale: {x: 0.5, y: 1.65},
                    scroll: 0,
                },
                {
                    //product
                    position: {
                        x: -12,
                        y: -2,
                        z: -18,
                    },
                    rotation: {
                        x: Math.PI / 2 - Math.PI / 90,
                        y: -Math.PI / 9,
                        z: Math.PI / 4,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale: { x:1, y: 0},
                    scroll: 0.20,
                },
                {
                    //feature
                    position: {
                        x: 12,
                        y: -10,
                        z: -15,
                    },
                    rotation: {
                        x: Math.PI / 2 - Math.PI / 90,
                        y: Math.PI / 9,
                        z: Math.PI / 4,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale: {x:1, y: 0},
                    scroll: 0.5,
                },
                {
                    //about
                    position: {
                        x: -17,
                        y: -10,
                        z: -15,
                    },
                    rotation: {
                        x: 1.565 - Math.PI / 40,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale: {x:2.5, y: 0},
                    scroll: 0.75,
                },
                {
                    //career
                    position: {
                        x: 0,
                        y: -1,
                        z: -15,
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 0.5,
                    logo_scale: 0,
                    // scale:{x: 1, y: 0},
                    scroll: 0.9,
                },
                {
                    //career
                    position: {
                        x: 0,
                        y: -1,
                        z: -15,
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 0,
                    logo_scale: 0,
                    // scale:{x: 0, y: 0},
                    scroll: 1,
                },
                
            ];
            


            const keyframes_mobile = [
                {
                    //homepage
                    position: {
                        x: 1.6,
                        y: 3.6,
                        z: -15,
                    },
                    rotation: {
                        x: Math.PI / 2 + Math.PI / 10,
                        y: Math.PI / 9,
                        z: 0,
                    },
                    atom_scale: 0.3,
                    logo_scale: 1,
                    // scale: {x: 0.5, y: 1.65},
                    scroll: 0,
                },
                {
                    //product
                    position: {
                        x: -12,
                        y: -2,
                        z: -18,
                    },
                    rotation: {
                        x: Math.PI / 2 - Math.PI / 90,
                        y: -Math.PI / 9,
                        z: Math.PI / 4,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale: { x:1, y: 0},
                    scroll: 0.15,
                },
                {
                    //feature
                    position: {
                        x: 12,
                        y: -10,
                        z: -15,
                    },
                    rotation: {
                        x: Math.PI / 2 - Math.PI / 90,
                        y: Math.PI / 9,
                        z: Math.PI / 4,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale: {x:1, y: 0},
                    scroll: 0.3,
                },
                {
                    //about
                    position: {
                        x: -17,
                        y: -10,
                        z: -15,
                    },
                    rotation: {
                        x: 1.565 - Math.PI / 40,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 1,
                    logo_scale: 0,
                    // scale: {x:2.5, y: 0},
                    scroll: 0.6,
                },
                {
                    //career
                    position: {
                        x: 0,
                        y: -1,
                        z: -15,
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 0.5,
                    logo_scale: 0,
                    // scale:{x: 1, y: 0},
                    scroll: 0.85,
                },
                {
                    //career
                    position: {
                        x: 0,
                        y: -1,
                        z: -15,
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0,
                    },
                    atom_scale: 0,
                    logo_scale: 0,
                    // scale:{x: 0, y: 0},
                    scroll: 1,
                },
                
            ];

            const broken_logo_transforms = {
                mobile: {
                    position: {
                        x: -3.24,
                        y: 6.2,
                        z: 0,
                    },
                    scale: 0,
                },
                tablet: {
                    position: {
                        x: -3.24,
                        y: 6.2,
                        z: 0,
                    },
                    scale: 0,
                },
                desktop: {
                    position: {
                        x: 19.5,
                        y: -6,
                        z: 0,
                    },
                    scale: 1.65,
                },
            };


            let logo_transform = broken_logo_transforms.desktop;
            let keyframes = keyframes_desktop;
            if(isMobile){
                logo_transform = broken_logo_transforms.mobile;
                keyframes = keyframes_mobile;
            }
            if(isTablet){
                logo_transform = broken_logo_transforms.tablet;
                keyframes = keyframes_tablet;
            }



            logogroup.position.set(
                logo_transform.position.x,
                logo_transform.position.y,
                logo_transform.position.z
            );
            // rotation
            logogroup.scale.set(
                logo_transform.scale,
                logo_transform.scale,
                logo_transform.scale
            );




            
            // The Logo
            gltfloader.load("/assets/logo.gltf", (gltf2) => {
                    Logo = gltf2.scenes[0].children[0];
                    Logo.rotation.z = 0 + Math.PI / 30; //-Math.PI/64;
                    Logo.position.y = 0.85;
                    Logo.position.x = 0.45;
                    Logo.position.z = 0;
                    // Logo.scale.set(2,2,2)    
                    logogroup.add(Logo);
                });

            gltfloader.load("/assets/BrokenGLTF3.gltf", (gltf) => {
                icoshadron = gltf.scenes[0].children[0];
                // scene.add(object);
                icoshadron.scale.x = 15;
                icoshadron.scale.y = 15;
                icoshadron.scale.z = 15;
                // window.o = object;

                main_group.add(icoshadron);

            });

            // Particles
            // Particle system
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCnt = []; //10,000 earlier
            const sprite = new THREE.TextureLoader().load("/assets/disc.png");
            // const posArray = new Float32Array(particlesCnt * 3);
            // xyz, xyz, xyz

            for (let i = 0; i < 20000; i++) {
                const x = 1000 * Math.random() - 500;
                const y = 1000 * Math.random() - 500;
                const z = 1000 * Math.random() - 500;

                particlesCnt.push(x, y, z);
            }

            particlesGeometry.setAttribute(
                "position",
                new THREE.Float32BufferAttribute(particlesCnt, 3)
            );

            const particlesMaterial = new THREE.PointsMaterial({
                size: 1,
                sizeAttenuation: true,
                map: sprite,
                alphaTest: 0.2,
                transparent: true,
            });

            particlesMaterial.color.setHSL(1.0, 0.3, 0.5);

            const particlesMesh = new THREE.Points(
                particlesGeometry,
                particlesMaterial
            );

            scene.add(particlesMesh);

            // Particle Animation
            // document.body.addEventListener( 'pointermove', onPointerMove );
            // document.body.style.touchAction = 'none';

            let scrollPos = 0;
            document.addEventListener("scroll", (e) => {
                scrollPos = window.scrollY;
            });

            let mouseX = 0,
                mouseY = 0;
            let windowHalfX = window.innerWidth / 2;
            let windowHalfY = window.innerHeight / 2;
            function onWindowResize() {
                windowHalfX = window.innerWidth / 2;
                windowHalfY = window.innerHeight / 2;
            }

            function onPointerMove(event) {
                if (event.isPrimary === false) return;

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;
            }
            document.body.addEventListener( 'pointermove', onPointerMove );

            hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 50);
            scene.add(hemiLight);

            let spotLight;
            spotLight = new THREE.SpotLight(0xffffff, 5);
            scene.add(spotLight);

            const sizes = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true,
            });
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            // renderer.setClearColor( 0xffffff, 1 );
            scene.background = null;
            // window.addEventListener("resize", () => {
            //     // Update sizes
            //     sizes.width = window.innerWidth; //on mobile using the keyboard, it decrease the width
            //     sizes.height = window.innerHeight; //on mobile using the keyboard, it decrease the height

            //     // Update camera
            //     camera.aspect = sizes.width / sizes.height;
            //     camera.updateProjectionMatrix();

            //     // Update renderer
            //     renderer.setSize(sizes.width, sizes.height);
            //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            //     // renderer.toneMapping = THREE.ReinhardToneMapping;
            //     // renderer.toneMappingExposure = 2.3;
            // });

            // Base camera
            const camera = new THREE.PerspectiveCamera(
                35,
                sizes.width / sizes.height,
                0.1,
                1000
            );
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = 75;
            scene.add(camera);

            let frame = 0;
            function animate() {
                requestAnimationFrame(animate);

                const time = Date.now() * 0.0005;
                particlesMesh.position.x +=
                    (mouseX - particlesMesh.position.x) * 0.0007;
                particlesMesh.position.y +=
                    (-mouseY - particlesMesh.position.y) * 0.0007;
                particlesMesh.position.z += 0.008;
                group1.rotation.z += 0.008;
                group2.rotation.z += 0.009;
                group3.rotation.z += 0.01;
                group4.rotation.z += 0.011;

                // Logo.scale.y += 0.1;
                // Logo.scale.z += 0.1;
                const h = ((360 * (1.0 + time)) % 360) / 360;
                particlesMaterial.color.setRGB(h, 0.9, 0.9);
                camera.lookAt(scene.position);

                let scrollPercent_mobile = scrollPos / 5367;
                let scrollPercent_desktop = scrollPos / 3684;
                let scrollPercent = scrollPercent_desktop;
                if(isMobile){
                    scrollPercent = scrollPercent_mobile;
                }

                let kfa = keyframes[0];
                let kfb = keyframes[1];
                for (let i = 1; i < keyframes.length; i++) {
                    let _kf_b = keyframes[i];
                    let _kf_a = keyframes[i - 1];
                    if (_kf_a.scroll <= scrollPercent && scrollPercent < _kf_b.scroll) {
                        kfa = _kf_a;
                        kfb = _kf_b;
                    }
                }


                let scroll_between_kf = (sa, sb, s) => (s - sa) / (sb - sa);

                // let interpolate = (va, vb, sa, sb, s) => va + (vb - va) * scroll_between_kf(sa, sb, s);

                // let rx = interpolate(kfa.rotation.x, kfb.rotation.x, kfa.scroll, kfb.scroll, scrollPercent);
                // let ry = interpolate(kfa.rotation.y, kfb.rotation.y, kfa.scroll, kfb.scroll, scrollPercent);
                // let rz = interpolate(kfa.rotation.z, kfb.rotation.z, kfa.scroll, kfb.scroll, scrollPercent);

                // let px = interpolate(kfa.position.x, kfb.position.x, kfa.scroll, kfb.scroll, scrollPercent);
                // let py = interpolate(kfa.position.y, kfb.position.y, kfa.scroll, kfb.scroll, scrollPercent);
                // let pz = interpolate(kfa.position.z, kfb.position.z, kfa.scroll, kfb.scroll, scrollPercent);

                // let s = interpolate(kfa.scale, kfb.scale, kfa.scroll, kfb.scroll, scrollPercent);

                // main_group.rotation.set(rx, ry, rz);
                // main_group.position.set(px, py, pz);
                // main_group.scale.set(s, s, s);

                // see wheather you are on the left side of keyframe or right side
                let is_left =
                    scroll_between_kf(kfa.scroll, kfb.scroll, scrollPercent) < 0.5;

                let vel = 0.05;
                let kfx = kfa;
                if (is_left) {
                    kfx = kfa;
                } else {
                    kfx = kfb;
                }

                let r1 = [kfx.rotation.x, kfx.rotation.y, kfx.rotation.z];
                let r2 = [
                    main_group.rotation.x,
                    main_group.rotation.y,
                    main_group.rotation.z,
                ];
                let r = [0, 0, 0];
                for (let i of [0, 1, 2]) {
                    let v = r2[i] - r1[i];
                    if (Math.abs(v) > 0) {
                        let dir = v / Math.abs(v);
                        r[i] = vel * dir * Math.abs(v);
                    }
                }

                main_group.rotation.x -= r[0];
                main_group.rotation.y -= r[1];
                main_group.rotation.z -= r[2];

                let p1 = [kfx.position.x, kfx.position.y, kfx.position.z];
                let p2 = [
                    main_group.position.x,
                    main_group.position.y,
                    main_group.position.z,
                ];
                let p = [0, 0, 0];
                for (let i of [0, 1, 2]) {
                    let v = p2[i] - p1[i];
                    if (Math.abs(v) > 0) {
                        let dir = v / Math.abs(v);
                        p[i] = vel * dir * Math.abs(v);
                    }
                }

                main_group.position.x -= p[0];
                main_group.position.y -= p[1];
                main_group.position.z -= p[2];

                let s1 = [kfx.atom_scale, kfx.atom_scale, kfx.atom_scale];
                let s2 = [main_group.scale.x, main_group.scale.y, main_group.scale.z];
                let s = [0, 0, 0];
                for (let i of [0, 1, 2]) {
                    let v = s2[i] - s1[i];
                    if (Math.abs(v) > 0) {
                        let dir = v / Math.abs(v);
                        s[i] = vel * dir * Math.abs(v);
                    }
                }

                main_group.scale.x -= s[0];
                main_group.scale.y -= s[1];
                main_group.scale.z -= s[2];

                let sl1 = [kfx.logo_scale, kfx.logo_scale, kfx.logo_scale];
                let sl2 = [logogroup.scale.x, logogroup.scale.y, logogroup.scale.z];
                let sl = [0, 0, 0];
                for (let i of [0, 1, 2]) {
                    let v = sl2[i] - sl1[i];
                    if (Math.abs(v) > 0) {
                        let dir = v / Math.abs(v);
                        sl[i] = vel * dir * Math.abs(v);
                    }
                }

                logogroup.scale.x -= sl[0];
                logogroup.scale.y -= sl[1];
                logogroup.scale.z -= sl[2];

                // main_group.position.set(px, py, pz);


                // main_group.rotation.x = initX +  (scrollPercent * Math.PI * 2 * 0.3);
                // main_group.rotation.y = initY +  (scrollPercent * Math.PI * 2);
                // main_group.rotation.z = initX +  (scrollPercent * Math.PI * 2);
                // main_group.position.x = initPosX -  scrollPercent*20;
                // main_group.scale.set(1+scrollPercent,1+scrollPercent,1+scrollPercent);
                // logogroup.scale.set(Math.max(0,InitLogoScale-scrollPercent*50),Math.max(0,InitLogoScale-scrollPercent*50),Math.max(0,InitLogoScale-scrollPercent*50))

                // group1.rotation.x = Math.PI/4;
            }
            animate();

            let velocity_1 = 3;
            let morph_1 = 0;
            var clock = new THREE.Clock();
            const tick = () => {
                const elapsedTime = clock.getElapsedTime();
                spotLight.position.set(
                    camera.position.x + 10,
                    camera.position.y + 10,
                    camera.position.z + 10
                );

                // object.morphTargetInfluences[0] = 0.4;
                if (icoshadron && icoshadron.morphTargetInfluences) {
                    // morph_1 += velocity_1;

                    let offset = Math.PI / 2;
                    const morph_0 = (Math.sin(elapsedTime * velocity_1 + offset) + 1) / 2;

                    offset = Math.PI;
                    const morph_1 = (Math.sin(elapsedTime * velocity_1 + offset) + 1) / 2;

                    offset = Math.PI * (3 / 2);
                    const morph_2 = (Math.sin(elapsedTime * velocity_1 + offset) + 1) / 2;

                    icoshadron.morphTargetInfluences[0] = morph_0;
                    icoshadron.morphTargetInfluences[1] = morph_1;
                    icoshadron.morphTargetInfluences[2] = morph_2;
                }

                // Render
                renderer.render(scene, camera);

                // Call tick again on the next frame
                window.requestAnimationFrame(tick);
            };

            tick();
        }
    }, []);

    return (
        <canvas
            id="three-animation"
            className=""
            style={{
                height: "100vh",
                width: "100%",
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                touchAction: "none",
                // pointerEvents:'none',
            }}
        ></canvas>
    );
};

export default ThreeLogo;
