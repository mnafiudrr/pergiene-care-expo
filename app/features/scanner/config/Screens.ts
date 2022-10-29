import ScreenData from '~/app/core/class/ScreenData';

const ScannerScreens = {
  SCANNER: new ScreenData<any>({
    KEY: 'Scanner',
    TITLE: 'Scanner',
  }),
  RESULT: new ScreenData<any>({
    KEY: 'Result',
    TITLE: 'Result',
  }),
};

export default ScannerScreens;
