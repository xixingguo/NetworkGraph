var SHOWCONFIG = {
    "screen": false,
    "brush": false,
    "info": true,
    "setting": false,
    "bar_chart": false,
    "node_text": true,
    "link_text": false,
    "marker": true,
    "color": false
};

// 信息显示开关
d3.select("#info-show")
    .on("click", function() {
        d3.select(this).classed("high-light", SHOWCONFIG.info = !SHOWCONFIG.info);
        d3.select("#info-layout").style("display", SHOWCONFIG.info === true ? "block" : "none");
    });

// 柱状图显示开关
d3.select("#bar-graph-show")
    .on("click", function () {
        d3.select(this).classed("high-light", SHOWCONFIG.bar_chart = !SHOWCONFIG.bar_chart);
        d3.select("#bar-graph")
            .attr("transform", "translate(" + (window.innerWidth - BARCONFIG.width + 2) + ", " + 32 + ")")
            // .style("display", SHOWCONFIG.bar_chart === true ? "block" : "none");
        if (SHOWCONFIG.bar_chart === true) {
            bar_graph.style("-webkit-animation", "showbar 3s")
                .style("opacity", "1");
        }
        else {
            bar_graph.style("-webkit-animation", "hidebar 3s")
                .style("opacity", "0");
        }
    });

// 节点标签显示开关
d3.select("#node-button").on("click", function() {
        d3.select(this).classed("high-light", SHOWCONFIG.node_text = !SHOWCONFIG.node_text);
        node_layout.selectAll("text").style("display", SHOWCONFIG.node_text === true ? "block" : "none");
    });

// 关系标签显示开关
d3.select("#link-button")
    .on("click", function() {
        d3.select(this).classed("high-light", SHOWCONFIG.link_text = !SHOWCONFIG.link_text);
        text_layout.selectAll("text").style("display", SHOWCONFIG.link_text === true ? "block" : "none");
    });

// 箭头显示开关
d3.select("#marker-button")
    .on("click", function() {
        d3.select(this).classed("high-light", SHOWCONFIG.marker = !SHOWCONFIG.marker);
        network_graph.select("marker")
            .select("path")
            .style("display", SHOWCONFIG.marker === true ? "block" : "none");
    });

// 设置面板显示开关
d3.selectAll("#setting-button")
    .on("click", function() {
        SHOWCONFIG.setting = !SHOWCONFIG.setting;
        if (SHOWCONFIG.setting === true) {
            d3.select("#setting-box")
                .style("animation", "show 3s")
                .style("right", "0px");
        }
        else {
            d3.select("#setting-box")
                .style("animation", "hide 3s")
                .style("right", "-300px");
        }
    });

// 配色条显示开关
d3.select("#color-button")
    .on("click", function() {
        SHOWCONFIG.color = !SHOWCONFIG.color;
        d3.select(this)
            .style("animation", SHOWCONFIG.color === true ? "rotate ease-in 2s" : "rerotate ease-out 2s")
        d3.select("#color-bar")
            .style("animation", SHOWCONFIG.color === true ? "show-bar ease-in 2s forwards" : "hide-bar ease-out 2s forwards")
    });

// 全屏切换
d3.select("#screen-button")
    .on("click", function() {
        SHOWCONFIG.screen = !SHOWCONFIG.screen;
        SHOWCONFIG.screen === true ? enterFullScreen() : exitFullScreen();
        d3.select("#screen-switch")
            .attr("class", SHOWCONFIG.screen === true ? "fa fa-compress" : "fa fa-expand");
    });

//进入全屏
function enterFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }
}

//退出全屏
function exitFullScreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
}