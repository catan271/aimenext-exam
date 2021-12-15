function key(str) {
    if (!str) return;
    let key = 0;
    for (let i = 0; i < str.length; i++) {
        key = key * 26 + str.charCodeAt(i) - 64;
    }
    return key;
}

function partition(arr, p, start, end) {
    [arr[p], arr[end]] = [arr[end], arr[p]];
    const pivot = key(arr[end]);

    let i = start;
    for (let j = start; j < end; j++) {
        if (key(arr[j]) < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
}

function quickSort(arr, start, end) {
    if (start >= end) return;

    const mid = Math.trunc((start + end) / 2);
    const index = partition(arr, mid, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

function sort(arr) {
    quickSort(arr, 0, arr.length - 1);
}

const arr = ['J', 'MI', 'KX', 'HA', 'MC', 'YM', 'SQ', 'GQ', 'XH', 'VR', 'VE', 'KA', 'NF', 'GX', 'EQ', 'QV', 'RH', 'PH', 'LT', 'TH', 'TT', 'DX', 'ZB', 'EX', 'EM', 'GV', 'QF', 'HH', 'NA', 'YC', 'QZ', 'AJ', 'GY', 'QI', 'GH', 'BE', 'RB', 'QP', 'AP', 'RO', 'HF', 'AN', 'ZZ', 'DC', 'NL', 'GT', 'IT', 'CF', 'VO', 'NO', 'EV', 'PN', 'FX', 'LH', 'DB', 'PR', 'XI', 'CE', 'DQ', 'HC', 'ID', 'D', 'F', 'QD', 'EY', 'XA', 'Q', 'VC', 'SB', 'ZE', 'QS', 'YS', 'OQ', 'VA', 'AC', 'NV', 'EZ', 'XP', 'BP', 'XD', 'DI', 'MF', 'QA', 'YB', 'CT', 'VV', 'HM', 'RV', 'G', 'PS', 'AM', 'IN', 'LL', 'DV', 'LR', 'BS', 'SO', 'PO', 'LA', 'YV', 'YP', 'GI', 'VX', 'IG', 'CO', 'PZ', 'RM', 'FB', 'HG', 'OY', 'YH', 'FE', 'KY', 'FA', 'GB', 'RP', 'CL', 'MQ', 'EP', 'TX', 'XM', 'RN', 'YE', 'FH', 'RC', 'DT', 'ZG', 'BF', 'X', 'DF', 'XK', 'BG', 'XR', 'BV', 'NP', 'NY', 'EF', 'RZ', 'TZ', 'QL', 'TB', 'DR', 'DP', 'SS', 'KL', 'KM', 'ZX', 'DY', 'NG', 'EN', 'AF', 'LC', 'GR', 'BC', 'B', 'EL', 'NR', 'IR', 'RY', 'OZ', 'NZ', 'LN', 'BM', 'DL', 'VD', 'GM', 'ZD', 'OT', 'PV', 'QE', 'YK', 'KF', 'GA', 'NC', 'DA', 'AK', 'FI', 'IV', 'ZM', 'YQ', 'V', 'KT', 'BX', 'QT', 'MH', 'DE', 'KE', 'RX', 'SH', 'KZ', 'KP', 'LS', 'FY', 'CS', 'HP', 'II', 'FT', 'YN', 'HI', 'CR', 'A', 'MO', 'NS', 'TF', 'BD', 'PA', 'BU', 'CC', 'OE', 'AI', 'KS', 'KC', 'MN', 'CM', 'XN', 'HK', 'GL', 'L', 'HT', 'DK', 'ZH', 'TE', 'AW', 'LI', 'RF', 'DG', 'GC', 'ER', 'KB', 'NN', 'DN', 'AA', 'PF', 'PB', 'GD', 'DS', 'TA', 'AU', 'HE', 'CI', 'HV', 'BL', 'ZV', 'TI', 'FO', 'IC', 'QM', 'CJ', 'IX', 'W', 'U', 'OF', 'CZ', 'AS', 'QH', 'GP', 'RL', 'VB', 'AQ', 'XF', 'NE', 'QO', 'IO', 'NQ', 'TN', 'LY', 'MG', 'MB', 'XS', 'S', 'IB', 'XX', 'AR', 'SI', 'OV', 'OL', 'BJ', 'MR', 'YD', 'TM', 'KI', 'EA', 'SY', 'ET', 'AE', 'BB', 'FZ', 'VG', 'FQ', 'T', 'DM', 'HB', 'O', 'SF', 'IE', 'XQ', 'RQ', 'IY', 'OA', 'CU', 'CQ', 'HZ', 'XO', 'DH', 'EB', 'RK', 'BI', 'IP', 'IF', 'ZR', 'SZ', 'FP', 'LG', 'AH', 'ZS', 'KV', 'BQ', 'MP', 'CB', 'SX', 'BZ', 'MT', 'NH', 'QR', 'XV', 'HR', 'FV', 'VZ', 'BO', 'ZQ', 'CV', 'DD', 'OI', 'PM', 'CW', 'AO', 'OR', 'TR', 'XE', 'VT', 'EI', 'TY', 'XL', 'QQ', 'LK', 'PC', 'ZA', 'ZL', 'CK', 'BH', 'XB', 'IM', 'ES', 'PX', 'OB', 'FC', 'Z', 'NK', 'DU', 'CG', 'AB', 'DZ', 'ST', 'YF', 'TO', 'VL', 'VQ', 'BW', 'TK', 'HX', 'EO', 'RE', 'CX', 'ZO', 'ME', 'PG', 'RA', 'H', 'FK', 'KN', 'CP', 'BA', 'QC', 'ZN', 'GG', 'ED', 'RS', 'PP', 'VK', 'OH', 'MZ', 'KD', 'IL', 'BT', 'MM', 'LM', 'SA', 'AY', 'HN', 'LF', 'R', 'QK', 'KH', 'EE', 'EG', 'TD', 'PK', 'MK', 'AV', 'SE', 'HQ', 'LB', 'GO', 'M', 'SN', 'VS', 'OS', 'CA', 'TL', 'FM', 'AX', 'EH', 'DO', 'RG', 'FR', 'ZY', 'ZI', 'KG', 'LP', 'TC', 'YL', 'GS', 'YZ', 'PD', 'ZT', 'KR', 'IH', 'QX', 'TS', 'HD', 'KO', 'YA', 'IA', 'MX', 'I', 'EC', 'HO', 'PT', 'LX', 'IK', 'TG', 'BK', 'QG', 'SL', 'CN', 'YX', 'OK', 'XG', 'GK', 'NX', 'GF', 'FN', 'YI', 'N', 'OX', 'Y', 'SM', 'IZ', 'LD', 'IS', 'VM', 'SG', 'QY', 'YT', 'ND', 'FG', 'NM', 'VH', 'BY', 'VY', 'OM', 'AT', 'BN', 'FD', 'DW', 'CH', 'AD', 'OC', 'VF', 'PL', 'GE', 'FS', 'RI', 'LZ', 'QN', 'KK', 'ZP', 'XC', 'XT', 'SR', 'PI', 'FF', 'MS', 'YG', 'DJ', 'SC', 'RT', 'OG', 'ZC', 'LE', 'LQ', 'P', 'CY', 'C', 'ON', 'GN', 'EK', 'HL', 'BR', 'MA', 'MD', 'LO', 'SP', 'VN', 'NB', 'QB', 'AL', 'OP', 'TP', 'E', 'AZ', 'ML', 'TQ', 'TV', 'YY', 'AG', 'HY', 'OD', 'IQ', 'SV', 'LV', 'HS', 'VP', 'OO', 'KQ', 'GZ', 'K', 'SK', 'NI', 'YO', 'ZF', 'SD', 'YR', 'ZK', 'PE', 'MV', 'PQ', 'RR', 'RD', 'CD', 'XY', 'PY', 'FL', 'VI', 'NT', 'XZ', 'MY'];
sort(arr);

console.log(arr);