customElements.define('nysds-asl-button', class extends HTMLElement {
    constructor() {
    super(); 

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <div class="nysds-asl-container"><a href="https://ogs.ny.gov" class="nysds-asl-link">ASL Interpretation Video<span class="nysds-sr-only">for this video with a title of blankity blank blank</span></a></div><style>.nysds-asl-container{display:flex;flex-direction:row;justify-content:center;align-items:flex-start}.nysds-asl-link{font-family:"Proxima Nova","proxima nova",proxima-nova,ProximaNovaRegular,sans-serif;font-size:13px;line-height:15px;font-weight:700;color:#000;border:1px solid #d0d0ce;display:flex;flex-direction:row;align-items:center;background:#ededed;text-decoration:none;letter-spacing:2px;padding:10px 15px}.nysds-asl-link:hover{background:#000;color:#fff}.nysds-asl-link:focus{background:#000;color:#fff}.nysds-asl-link-text{display:flex;align-items:center}.nysds-asl-link:hover::after{filter:invert(100%)}.nysds-asl-link:focus::after{filter:invert(100%)}.nysds-asl-link:hover::before{filter:invert(100%)}.nysds-asl-link:focus::before{filter:invert(100%)}.nysds-asl-link::after{box-sizing:content-box;display:block;content:" ";background-repeat:no-repeat;width:12px;height:12px;margin-left:10px;margin-bottom:3px;color:#000;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --%3E%3Cpath d='M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z'/%3E%3C/svg%3E")}.nysds-asl-link::before{box-sizing:content-box;display:block;content:" ";background-repeat:no-repeat;width:30px;height:30px;margin-right:10px;border-right:1px #000 solid;padding-right:10px;background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' style='enable-background:new 0 0 100 100;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:%23000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;%7D%0A%3C/style%3E%3Cg id='Layer_1'%3E%3Cg%3E%3Cpath class='st0' d='M63.72,72.81L63.72,72.81c-1.44,0-2.6-1.16-2.6-2.6v-2.64c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v2.64C66.32,71.65,65.16,72.81,63.72,72.81z'/%3E%3Cpath class='st0' d='M68.92,72.81L68.92,72.81c-1.44,0-2.6-1.16-2.6-2.6v-5.29c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v5.29C71.52,71.65,70.36,72.81,68.92,72.81z'/%3E%3Cpath class='st0' d='M74.13,72.81L74.13,72.81c-1.44,0-2.6-1.16-2.6-2.6v-7.43c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v7.43C76.73,71.65,75.56,72.81,74.13,72.81z'/%3E%3Cpath class='st0' d='M76.73,69.26V53.92c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6v19.56'/%3E%3Cpolyline class='st0' points='81.39,89.25 81.39,95.81 66.12,95.81 66.12,89.25 '/%3E%3Cpath class='st0' d='M81.39,89.25c0-3.33,2.42-5.31,2.42-5.31l12.61-12.61c0.44-0.44,0.44-1.16,0-1.61l-1.04-1.04 c-1.55-1.09-3.59-0.09-4.61,0.93l-4.72,4.72c0,0-9.33-3.39-13.52,5.12'/%3E%3Cpath class='st0' d='M61.12,67.24v8.6c0,3.32,1.2,6.42,3.21,8.8c0,0,1.79,1.83,1.79,4.61'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st0' d='M37.35,42.68L37.35,42.68c-1.44,0-2.6-1.16-2.6-2.6v-3.06c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v3.06C39.95,41.51,38.79,42.68,37.35,42.68z'/%3E%3Cpath class='st0' d='M42.55,42.68L42.55,42.68c-1.44,0-2.6-1.16-2.6-2.6V34.8c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v5.28C45.16,41.51,43.99,42.68,42.55,42.68z'/%3E%3Cpath class='st0' d='M50.36,40.07c0,1.44-1.16,2.6-2.6,2.6h0c-1.44,0-2.6-1.16-2.6-2.6v-6.81c0-1.44,1.16-2.6,2.6-2.6h0 c1.44,0,2.6,1.16,2.6,2.6v1.16'/%3E%3Cpath class='st0' d='M55.56,39.95c0,1.44-1.16,2.53-2.6,2.53h0c-1.44,0-2.6-1.16-2.6-2.6v-0.51'/%3E%3Cpath class='st0' d='M50.36,34.31c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6v0.11'/%3E%3Cpolyline class='st0' points='55.02,60.06 55.02,66.62 39.54,66.62 39.54,60.06 '/%3E%3Cpath class='st0' d='M47.9,51.52c0-4.88,3.43-8.84,7.66-8.84'/%3E%3Cpath class='st0' d='M60.76,38.08v9.32c0,0.11-0.02,0.22-0.03,0.33c-0.15,3.04-1.34,5.8-3.22,7.94c0,0-2.48,2.02-2.48,4.4'/%3E%3Cpath class='st0' d='M34.75,38.05v8.56c0,3.05,1.02,5.93,2.74,8.23c0,0,2.05,2.79,2.05,5.22'/%3E%3Cpath class='st0' d='M60.76,38.08c0-2.02-1.64-3.66-3.66-3.66c0,0-4.81,0-7.35,0c-2.54,0-1.37,3.23-1.26,3.49 c0.17,0.41,0.71,2.09,7.05,2.04c0.06,0.11,0,2.73,0,2.73'/%3E%3C/g%3E%3Cpath class='st0' d='M7.23,19.62L7.23,19.62c-1.44,0-2.6-1.16-2.6-2.6v-3.06c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v3.06C9.83,18.45,8.67,19.62,7.23,19.62z'/%3E%3Cpath class='st0' d='M12.43,19.62L12.43,19.62c-1.44,0-2.6-1.16-2.6-2.6v-4.57c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v4.57C15.03,18.45,13.87,19.62,12.43,19.62z'/%3E%3Cpath class='st0' d='M17.63,19.62L17.63,19.62c-1.44,0-2.6-1.16-2.6-2.6v-5.57c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v5.57C20.23,18.45,19.07,19.62,17.63,19.62z'/%3E%3Cpath class='st0' d='M22.83,19.62L22.83,19.62c-1.44,0-2.6-1.16-2.6-2.6v-5.57c0-1.44,1.16-2.6,2.6-2.6h0c1.44,0,2.6,1.16,2.6,2.6 v5.57C25.44,18.45,24.27,19.62,22.83,19.62z'/%3E%3Cpolyline class='st0' points='24.9,37.59 24.9,43.56 9.42,43.56 9.42,37.59 '/%3E%3Cpath class='st0' d='M15.45,28.45c0-4.88,3.43-8.84,7.66-8.84'/%3E%3Cpath class='st0' d='M25.44,13.62V9.28c0-1.44,0.74-3.59,2.6-3.92h1.47c0.63,0,1.14,0.51,1.14,1.14v17.84 c0,0.11-0.02,0.22-0.03,0.33c-0.13,2.64-1.05,5.07-2.52,7.06c0,0-3.19,2.89-3.19,5.87'/%3E%3Cpath class='st0' d='M4.63,14.99l0,8.6c0,2.78,0.85,5.41,2.3,7.59c0,0,2.49,3.35,2.49,6.4'/%3E%3C/g%3E%3C/svg%3E%0A")}.nysds-sr-only{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.nysds-border-radius{border-radius:5px}</style>
      `;
    }
});