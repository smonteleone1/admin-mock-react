const codeFrame = require('@babel/code-frame').codeFrameColumns;
const chalk = require('chalk');
const fs = require('fs');
const os = require('os');

function formatter(errMessage, isColorsEnabled, diagnostic) {
    const {
        type, severity, file, line, content, code, character, message
    } = typeof errMessage.getFile === 'function'
        ? {
            type: errMessage.getType(),
            severity: errMessage.getSeverity(),
            file: errMessage.getFile(),
            line: errMessage.getLine(),
            message: errMessage.getContent(),
            code: errMessage.getCode(),
            character: errMessage.getCharacter()
        }
        : errMessage;

    const source = file && fs.existsSync(file) && fs.readFileSync(file, 'utf-8');
    const frame = source
        ? codeFrame(
            source,
            { start: { line, column: character } },
            { highlightCode: isColorsEnabled }
        )
            .split('\n')
            .map((str) => `  ${str}`)
            .join(os.EOL)
        : '';
    const colors = new chalk.Instance({ enabled: isColorsEnabled });
    const diagnosticColor = errMessage.getFile === 'function' && errMessage.isWarningSeverity() ? colors.yellow : colors.red;
    const fileColor = colors.bold.cyan;
    if (file) {
        return [
            diagnosticColor.bold(`${diagnostic} ${severity.toLowerCase()} in `)
            + fileColor(`${file}(${line},${character})`)

            + diagnosticColor(':'),
            `${colors.bold(content || message)
            }  ${
                diagnosticColor.underline((type === 'lint' ? 'Rule: ' : 'TS') + code)}`,
            '',
            frame
        ].join(os.EOL);
    }
    return null;
}

module.exports = formatter;
