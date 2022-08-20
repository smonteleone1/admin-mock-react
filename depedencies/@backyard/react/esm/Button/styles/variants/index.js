import { css } from 'styled-components';
import Primary from './Primary';
import Secondary from './Secondary';
import Tertiary from './Teritary';
import Ghost from './Ghost';
import Inverse from './Inverse';
var Variants = css(["&.variant{&--primary{", "}&--secondary{", "}&--tertiary{", "}&--ghost{", "}&--inverse{", "}}"], Primary, Secondary, Tertiary, Ghost, Inverse);
export { Variants };
export default Variants;