Chart.controllers.lineCrosshairsTooltip = Chart.controllers.line.extend({
    draw: function () {
        Chart.controllers.line.prototype.draw.apply(this, arguments)

        const chart = this.chart
        const ctx = chart.chart.ctx
        const verticalLineOptions = Object.assign({
            display: true,
            color: 'blue',
            lineDash: [5]
        }, chart.options.tooltips.verticalLine)
        if (!verticalLineOptions.display || !chart.tooltip._active || !chart.tooltip._active.length) {
            return
        }

        const tooltip = chart.tooltip._active[0]
        const xPoint = tooltip._view.x
        const yTop = tooltip._yScale.top
        const yBottom = tooltip._yScale.bottom

        ctx.save()
        ctx.beginPath()
        ctx.setLineDash(verticalLineOptions.lineDash);
        ctx.moveTo(xPoint, yTop)
        ctx.strokeStyle = verticalLineOptions.color
        ctx.lineTo(xPoint, yBottom)
        ctx.stroke()
        ctx.restore()
    }
})
