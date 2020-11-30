const { init, errorCodes } = window.anylinejs;

const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function(s) {
    return entityMap[s];
  });
}

function replaceVerticalBar(string) {
  return String(string).replace(/[|]/g, function(s) {
    return '\n';
  });
}

const meterImage = "/9j/4AAQSkZJRgABAQAASABIAAD/4QBkRXhpZgAATU0AKgAAAAgABAEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEoAAMAAAABAAIAAIdpAAQAAAABAAAAPgAAAAAAAqACAAQAAAABAAABaKADAAQAAAABAAAAoAAAAAD/4QkhaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+AP/tADhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAADhCSU0EJQAAAAAAENQdjNmPALIE6YAJmOz4Qn7/4g1cSUNDX1BST0ZJTEUAAQEAAA1MYXBwbAIQAABtbnRyUkdCIFhZWiAH5AAKAAIAFAAVAA9hY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJkZXNjAAABXAAAAGJkc2NtAAABwAAAAfBjcHJ0AAAD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"

const viewConfig = {
  // captureResolution: '1080p',
  outerColor: '000000',
  outerAlpha: 0.5,
  cutouts: [{
      cancelOnResult: false,
      cutoutConfig: {
        // style: 'rect',
        maxWidthPercent: '80%',
        alignment: 'top_half',
        ratioFromSize: {
          width: 300,
          height: 250,
        },
        width: 720,
        strokeWidth: 2,
        cornerRadius: 4,
        strokeColor: 'FFFFFFFF',
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        style: 'contour_point',
        strokeColor: '0099FF',
        fillColor: '300099FF',
        strokeWidth: 2,
        cornerRadius: 4,
        animationDuration: 150,
        animation: 'NONE',
      },
    },
  ],
};

const root = document.getElementById('root');
let selectedPreset = undefined;

function mountAnylineJS(preset) {
  selectedPreset = preset;
  const Anyline = init({
    config: {},
    preset: "meter",
    viewConfig,
    license: demoLicense,
    element: root,
    debugAnyline: true,
    //anylinePath: '../../anylinejs'
  });

  console.log('LOADING ANYLINE');

  let modalOpen = false;

  Anyline.onResult = result => {

  };

  Anyline.onReport = msg => {
    console.log('Report: ', msg);
  };

  Anyline.onDebug = msg => {
    alert(JSON.stringify(msg));
  };

  Anyline.onError = ({ code, message }) => {
    if (code === errorCodes.WEBCAM_ERROR) {
      console.error('webcam error: ', message);
    }
  };

  Anyline.startManualScan();

  var totalRounds = 0;
  var sum = 0;
  var zeitStart = performance.now();

  Anyline.onLoadOnce = (items) => {
      console.log('DEBUG DEBUG DEBUG DEBUG ', items);
  }

  Anyline.onManualFrame = () => {

    totalRounds = totalRounds + 1;
    var zeitNow = performance.now();

    var milli =  (zeitNow - zeitStart);
    sum = sum + milli;

    var avg = Math.floor(sum / totalRounds);
    var milli = Math.floor(milli);
    console.log('MANUAL FRAME REQUESTED -- ', milli);
    console.log('MANUAL FRAME REQUESTED -- ', avg);

    document.getElementById("benchBanner").innerHTML = "Rounds: " + totalRounds + "<br>Avg: " + avg + " ms" + "<br>Cur: " + milli + " ms";

    zeitStart = performance.now();

    if (totalRounds == 75) {
        Anyline.sendDebug({
            'average' : avg,
            'machineName' : navigator.userAgent,
        });
        document.getElementById("benchBanner").innerHTML = "Avg: " + avg + " ms<br>" + "Benchmark done. Thank you."
    } else {
        Anyline.processImage(meterImage);
    }
  };

  window.Anyline = Anyline;

}

mountAnylineJS('meter');

function remountAnylineJS() {
  Anyline.stopScanning();
  Anyline.dispose();
  mountAnylineJS(selectedPreset);
}