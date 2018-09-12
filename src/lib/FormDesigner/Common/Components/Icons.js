
import ShortTextIcon from '@material-ui/icons/Input';
import LongTextIcon from '@material-ui/icons/Assignment';
import DropdownIcon from '@material-ui/icons/ArrowDropDownCircle';
import CheckboxIcon from '@material-ui/icons/CheckBox';
import EmailIcon from '@material-ui/icons/Email';
import FileIcon from '@material-ui/icons/AttachFile';
import RadioIcon from '@material-ui/icons/RadioButtonChecked';

import FieldControlsEnum from '../Models/FieldControlsEnum';

export const fieldIconMapping = {
    [FieldControlsEnum.ShortText]: ShortTextIcon,
    [FieldControlsEnum.LongText]: LongTextIcon,
    [FieldControlsEnum.Dropdown]: DropdownIcon,
    [FieldControlsEnum.Checkbox]: CheckboxIcon,
    [FieldControlsEnum.Email]: EmailIcon,
    [FieldControlsEnum.File]: FileIcon,
    [FieldControlsEnum.Number]: ShortTextIcon,
    [FieldControlsEnum.Radio]: RadioIcon,
};

