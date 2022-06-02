import { createStyles, MantineColor } from "@mantine/core";

type TimelineChartParams = {
  color?: MantineColor,
  chartWidth?: string,
}

export default createStyles((theme, params: TimelineChartParams) => {
  const borderColor = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];

  return {
    chart: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      width: params.chartWidth || 'auto',
    },

    legend: {
      borderRight: `1px solid ${borderColor}`,
      borderBottom: `1px solid ${borderColor}`,
      padding: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      // Disable border for last child
      '&:nth-last-of-type(-n+2)': {
        borderBottom: '0px'
      },

      // Stripe every second row
      '&:nth-last-of-type(4n), &:nth-last-of-type(4n-1)': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },

    laneGroup: {
      borderBottom: `1px solid ${borderColor}`,
      padding: '5px 0',

      // Disable border for last child
      '&:nth-last-of-type(-n+2)': {
        borderBottom: '0px'
      },

      // Stripe every second row
      '&:nth-last-of-type(4n), &:nth-last-of-type(4n-1)': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },

    lane: {
      width: '100%',
      position: 'relative',
      height: '30px',
    },

    chartBar: {
      position: 'absolute',
      top: '4px',
      height: '22px',
      backgroundColor: theme.fn.themeColor(
        params.color || theme.primaryColor,
        theme.fn.primaryShade(),
        false
      ),
      userSelect: 'none',
      borderRadius: theme.fn.size({ size: theme.defaultRadius, sizes: theme.radius }),

      ':hover': {
        cursor: 'pointer'
      },
    },

    chartBarInner: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
    },

    tooltip: {
      width: '100%',
      height: '100%',
    },
  }
});
