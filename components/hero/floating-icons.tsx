"use client";

import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";

interface Position {
  x: number;
  y: number;
}
const FloatIcons = () => {
  const [initialMousePos, setInitialMousePos] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setInitialMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    const containerRect = containerRef.current!.getBoundingClientRect();
    const relX = e.clientX - containerRect.left;
    const relY = e.clientY - containerRect.top;

    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    const moveX = (centerX - relX) / 20;
    const moveY = (centerY - relY) / 20;

    setPosition({
      x: initialMousePos.x !== 0 ? moveX : 0,
      y: initialMousePos.y !== 0 ? moveY : 0,
    });

    timeoutRef.current = window.setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 300); // Adjust the timeout duration as needed
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    const { gamma } = event;
    const maxMovement = 120; // Adjust this value based on desired sensitivity

    if (gamma !== null && gamma !== undefined) {
      const moveX = (gamma / 90) * maxMovement * 2;
      setPosition({
        x: moveX,
        y: position.y, // Maintain the y-position if gamma is null
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(
          "deviceorientation",
          handleDeviceOrientation
        );
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="mix-blend-hard-light w-full h-40">
        <Image
          src="/orange-red-gradient-background.png"
          fill={true}
          alt=""
          className="w-full h-150 object-cover absolute top-0 bottom-0 left-0 right-0 -z-10"
          decoding="async"
          data-nimg="1"
        />
        <div
          className="header_floating-langs-grid"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          ref={containerRef}
        >
          <div
            id="w-node-_14e52e11-43e0-3210-1bc7-d3cf2ef95503-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-2"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-outline"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-_17e64582-7d69-b248-8d0f-53d0682e6e94-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-2"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-bright"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          {/* js */}
          <div
            id="w-node-_5f6e5bd7-284f-f405-af30-bcf3832825d4-41b80a8c"
            className="header_floating-langs-item-z is-depth-plus-1"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_23_1357)">
                    <path
                      d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                      fill="currentcolor"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-_39ecaeba-6f6d-99bc-cfdf-37f1c58b4fb7-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-dull"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          {/* typescript */}
          <div
            id="w-node-_643b8cde-a3a8-acb2-791b-1686966ea547-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-1"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="currentcolor"
                    d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {/* figma */}
          <div
            id="w-node-f0615924-d1eb-c90c-241f-0f8224bb2502-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15"
                    stroke="currentcolor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-dbc4353f-77da-722c-6cab-d4c70ccf7a2d-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-2"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-dull"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          {/* photoshop */}
          <div
            id="w-node-_5123c58c-5be1-cd39-8122-7372ca6a4920-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-2"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg
                  fill="currentcolor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  enableBackground="new 0 0 512 512"
                >
                  <g id="2069a460dcf28295e231f3111e037552">
                    <path
                      display="inline"
                      d="M426.333,0.5H85.667C38.825,0.5,0.5,38.825,0.5,85.667v340.667c0,46.842,38.325,85.167,85.167,85.167
                                                                    h340.667c46.842,0,85.167-38.325,85.167-85.167V85.667C511.5,38.825,473.175,0.5,426.333,0.5z M245.329,260.524
                                                                    c-17.736,17.736-45.611,26.065-77.103,26.065c-8.326,0-15.927-0.365-21.72-1.451v91.945h-44.159V136.363
                                                                    c15.927-2.895,38.009-5.069,68.05-5.069c32.582,0,56.473,6.878,72.039,19.911c14.48,11.947,23.89,31.131,23.89,53.936
                                                                    C266.325,228.309,259.086,247.492,245.329,260.524z M337.981,380.706c-21.358,0-40.542-5.069-53.574-12.31l8.687-32.216
                                                                    c10.135,6.154,29.322,12.671,45.249,12.671c19.545,0,28.236-7.964,28.236-19.549c0-11.943-7.239-18.099-28.96-25.7
                                                                    c-34.391-11.947-48.866-30.769-48.505-51.403c0-31.131,25.7-55.383,66.604-55.383c19.549,0,36.562,5.069,46.695,10.496
                                                                    l-8.687,31.493c-7.602-4.342-21.721-10.135-37.285-10.135c-15.928,0-24.615,7.602-24.615,18.46c0,11.224,8.326,16.655,30.77,24.618
                                                                    c31.854,11.582,46.696,27.871,47.058,53.937C409.653,357.539,384.678,380.706,337.981,380.706z M221.8,206.95
                                                                    c0,28.598-20.273,44.887-53.574,44.887c-9.049,0-16.289-0.362-21.72-1.809v-82.534c4.708-1.085,13.395-2.171,25.704-2.171
                                                                    C202.979,165.323,221.8,179.803,221.8,206.95z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-_6c9a1a23-9933-4ad4-c3f8-58320d525258-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-dull"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          {/* python*/}
          <div
            id="w-node-_73dbb1ad-85da-45ba-eb23-f9408cc7bf0c-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-1 is-faded-mobile"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="currentcolor"
                    d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-_64042d80-7c6e-0c4b-e6ae-83c5fd73cbaf-41b80a8c"
            className="header_floating-langs-item-z is-depth-plus-1"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          >
            <div className="header_floating-langs-item-x-y is-blank-dull"></div>
          </div>
          {/* next js */}
          <div className="header_floating-langs-item-z is-depth-plus-2 is-faded-mobile">
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                      fill="currentcolor"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-_94b46030-ccb9-5648-610b-0a3b5e7cf0a4-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-2"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-dull"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-c95e904c-f06e-ca33-b39f-404566865028-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-outline"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          {/* react */}
          <div
            id="w-node-b77296a5-5fe0-98cc-d4ff-c5acf2226894-41b80a8c"
            className="header_floating-langs-item-z is-depth-plus-1 is-faded-mobile"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>react</title>
                  <rect width="24" height="24" fill="none" />
                  <path d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" />
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-_640343c9-46e8-bce4-4cde-8e26379cd658-41b80a8c"
            className="header_floating-langs-item-z is-depth-plus-1"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-outline"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-fcf1a2e8-2204-1109-a056-01c64d090726-41b80a8c"
            className="header_floating-langs-item-z is-depth-plus-1"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-dull"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-bbde3340-ea00-52da-2b01-59071381daca-41b80a8c"
            className="header_floating-langs-item-z is-depth-plus-1 is-faded-mobile"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed"></div>
            </div>
          </div>
          <div
            id="w-node-_54a4b8ed-5d3e-d0c7-cb45-51d7d311910a-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-outline"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-cbe9ce05-6ef6-3783-09aa-cd48c08594a2-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-bright"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-_13377759-6a5b-620d-2506-f77f905a0583-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-d3b6ec1e-5d66-5851-b311-561e26970a4e-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-bright"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-d875c90e-e4a0-c072-c091-b683f1efb43f-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          {/* tailwind */}
          <div
            id="w-node-_3843e0f6-14be-ca40-0614-638a26c6af25-41b80a8c"
            className="header_floating-langs-item-z is-faded-mobile"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg
                  fill="currentcolor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-c5a305cb-bb4d-467f-444b-6bd4d231019b-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-_7b463528-cdfc-2325-3024-4fbad2a73c25-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-2"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-bright"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-_86fda317-8121-812c-a599-fcabccb9d4ef-41b80a8c"
            className="header_floating-langs-item-z is-depth-plus-2"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-bright"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-_2d8d1803-b5b9-bb60-9cb8-8405334dbc60-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-2"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-outline"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          {/*  */}
          <div
            id="w-node-de1c0f03-c2e8-65e1-7419-c5e4391a24a9-41b80a8c"
            className="header_floating-langs-item-z is-faded-mobile is-behind-text"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg
                  fill="currentcolor"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>mongodb</title>
                  <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-d3f5e761-87eb-54b7-7ad8-a5aae2e3f03c-41b80a8c"
            className="header_floating-langs-item-z is-depth-plus-1"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-outline"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
          <div
            id="w-node-_3b835b1a-1824-9106-d5c8-2727cec787dc-41b80a8c"
            className="header_floating-langs-item-z is-depth-minus-1 is-faded-mobile"
          >
            <div
              className="header_floating-langs-item-x-y"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div className="header_floating-langs-icon w-embed">
                <svg
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentcolor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  enableBackground="new 0 0 512 512"
                >
                  <g id="2069a460dcf28295e231f3111e03585e">
                    <path
                      display="inline"
                      d="M227.593,217.991l19.188,60.091h-62.627l18.825-60.091c4.346-14.48,7.964-31.493,11.582-45.611h0.724
          C218.906,186.499,222.886,203.149,227.593,217.991z M511.5,85.667v340.667c0,46.842-38.325,85.167-85.167,85.167H85.667
          C38.825,511.5,0.5,473.175,0.5,426.333V85.667C0.5,38.825,38.825,0.5,85.667,0.5h340.667C473.175,0.5,511.5,38.825,511.5,85.667z
          M324.246,380.885l-79.279-243.977h-56.83l-78.189,243.977h45.973l20.997-69.14h77.465l22.082,69.14H324.246z M399.52,204.597
          h-44.888v176.288h44.888V204.597z M402.052,155.368c-0.362-13.756-9.772-24.252-24.977-24.252
          c-14.842,0-24.976,10.496-24.976,24.252c0,13.395,9.772,23.891,24.614,23.891C392.279,179.258,402.052,168.762,402.052,155.368z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            id="w-node-_2cee7884-8f2d-92e1-7c5a-ecde9b3cd807-41b80a8c"
            className="header_floating-langs-item-z"
          >
            <div
              className="header_floating-langs-item-x-y is-blank-outline"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatIcons;
