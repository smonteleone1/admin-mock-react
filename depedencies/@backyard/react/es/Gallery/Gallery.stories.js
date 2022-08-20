var _ApiLink, _ApiLink2, _ApiLink3, _svg, _div, _VideoThumbnailOverla, _ApiLink4, _ModalHeader, _VideoThumbnailOverla2, _Grid$Column, _Grid$Column2, _ApiLink5, _FormHeading, _br;

import React from 'react';
import { withKnobs, select, number, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, Gallery, GalleryProvider, GalleryThumbnailGroup, GalleryViewport, Modal, ModalHeader, ModalBody, FormControl, FormHeading, GallerySkeleton } from '../';
export default {
  title: '@backyard/react/Gallery',
  decorators: [withKnobs]
};
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
const maxThumbnails = ['maxThumbnails', {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '20': 20
}, 4];
export const DefaultGallery = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Gallery, {
  shape: select(...shapes),
  excessRender: text('excessRender', 'View %max more'),
  onChange: action('onChange'),
  onClickNext: action('onClickNext'),
  onClickPrevious: action('onClickPrevious'),
  items: [{
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb'
  }, {
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb'
  }, {
    original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb'
  }]
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Gallery"
})));
export const DisableThumbnails = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Gallery, {
  disableThumbnails: true,
  shape: select(...shapes),
  onChange: action('onChange'),
  items: [{
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb'
  }, {
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb'
  }, {
    original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb'
  }]
}), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Gallery"
})));
export const DisableNavigation = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Gallery, {
  disableNavigation: true,
  shape: select(...shapes),
  onChange: action('onChange'),
  items: [{
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb'
  }, {
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb'
  }, {
    original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb'
  }]
}), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Gallery"
})));

const loadScript = (() => {
  const loadApiInstance = src => {
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', () => {
        resolve(script);
      }, false);
      script.addEventListener('error', () => {
        reject(script);
      }, false);
      document.head.appendChild(script);
    });
    return promise;
  };

  let instance = null;
  return {
    getInstance: src => {
      instance = loadApiInstance(src);
      return instance;
    }
  };
})();

const VideoThumbnailOverlay = () => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: '4px',
    right: '4px',
    top: '4px',
    bottom: '4px'
  }
}, _svg || (_svg = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 160 160"
}, /*#__PURE__*/React.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(-299.000000, -935.000000)"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(299.000000, 935.000000)"
}, /*#__PURE__*/React.createElement("g", {
  fill: "#000000",
  fillOpacity: "0.54"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "80",
  cy: "80",
  r: "80"
})), /*#__PURE__*/React.createElement("circle", {
  stroke: "#FFFFFF",
  strokeWidth: "5",
  cx: "80",
  cy: "80",
  r: "30.9333333"
}), /*#__PURE__*/React.createElement("polygon", {
  fill: "#FFFFFF",
  points: "71.4666667 68.2666667 71.4666667 92.8 93.8666667 80.5333333"
})))))));

const VideoViewer = ({
  data,
  playerSize,
  autoPlay = '0'
}) => {
  React.useEffect(() => {
    const playVideoViewer = videoViewers => {
      const videoelement = document.getElementById('s7_videoview_container');

      if (videoelement) {
        videoelement.parentNode.removeChild(videoelement);
      }

      const videoVs = new videoViewers.VideoViewer({
        containerId: 's7_videoview',
        params: {
          asset: `Lowes/${data.videoLink}`,
          stagesize: playerSize,
          autoplay: autoPlay,
          serverurl: 'https://lda.lowes.com/is/image/',
          contenturl: 'https://lda.lowes.com/skins/',
          config: 'Scene7SharedAssets/Universal_HTML5_Video',
          emailurl: 'https://lda.lowes.com/s7/emailFriend',
          videoserverurl: 'https://lda.lowes.com/is/content/'
        }
      });
      videoVs.init();
    };

    loadScript.getInstance('https://lda.lowes.com/s7viewers/html5/js/VideoViewer.js').then(() => {
      playVideoViewer(window.s7viewers);
    });
  }, [data, playerSize]);
  return _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: "spinvview"
  }, /*#__PURE__*/React.createElement("div", {
    id: "s7_videoview"
  })));
};

export const CustomGalleryItems = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Gallery, {
  shape: select(...shapes),
  excessRender: text('excessRender', 'View %current more'),
  items: [{
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
    renderViewportItem: (props, ref) => /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      }
    }, /*#__PURE__*/React.createElement(VideoViewer, {
      data: {
        videoLink: '883049354699_video_01-AVS'
      },
      playerSize: "375,375"
    })),
    renderThumbnail: ({
      src,
      alt
    }, ref) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt
    }), _VideoThumbnailOverla || (_VideoThumbnailOverla = /*#__PURE__*/React.createElement(VideoThumbnailOverlay, null)))
  }, {
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb'
  }, {
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb'
  }]
}), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Gallery"
})));
export const CustomGalleryLayout = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Modal, {
  size: "auto"
}, _ModalHeader || (_ModalHeader = /*#__PURE__*/React.createElement(ModalHeader, null, "Gallery Example")), /*#__PURE__*/React.createElement(ModalBody, {
  style: {
    paddingRight: '1rem',
    maxHeight: '40rem'
  }
}, /*#__PURE__*/React.createElement(GalleryProvider, {
  shape: select(...shapes),
  excessRender: text('excessRender', 'View %excess more'),
  onChange: action('onChange'),
  onClickNext: action('onClickNext'),
  onClickPrevious: action('onClickPrevious'),
  items: [{
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
    renderViewportItem: (props, ref) => /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      }
    }, /*#__PURE__*/React.createElement(VideoViewer, {
      data: {
        videoLink: '883049354699_video_01-AVS'
      },
      playerSize: "375,375"
    })),
    renderThumbnail: ({
      src,
      alt
    }, ref) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt
    }), _VideoThumbnailOverla2 || (_VideoThumbnailOverla2 = /*#__PURE__*/React.createElement(VideoThumbnailOverlay, null)))
  }, {
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb'
  }, {
    original: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
    thumbnail: 'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb'
  }, {
    original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb'
  }, {
    original: 'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
    thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb'
  }]
}, /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(Grid.Column, {
  style: {
    width: '6rem'
  }
}, /*#__PURE__*/React.createElement(GalleryThumbnailGroup, {
  disableMobile: boolean('disableMobile', false),
  maxThumbnails: select(...maxThumbnails),
  direction: "column",
  style: {
    maxHeight: '32rem'
  }
})), _Grid$Column || (_Grid$Column = /*#__PURE__*/React.createElement(Grid.Column, null)), _Grid$Column2 || (_Grid$Column2 = /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(GalleryViewport, null))))))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Gallery"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Gallery Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(GallerySkeleton, {
  animate: boolean('Animate', false),
  hideButtons: boolean('Hide Buttons', false),
  thumbnails: number('Thumbnails', 5)
})));