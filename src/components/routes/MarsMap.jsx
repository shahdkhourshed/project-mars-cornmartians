import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const MarsMap = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const width = 800, height = 600;
        const projection = d3.geoOrthographic()
            .scale(300)
            .translate([width / 2, height / 2])
            .rotate([0, -30])
            .clipAngle(90);

        const path = d3.geoPath().projection(projection);

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .style("background", "black");

        d3.json("https://raw.githubusercontent.com/ryanwdavis/marstopojson/master/mars-topo.json")
            .then(data => {
                svg.append("g")
                    .selectAll("path")
                    .data(topojson.feature(data, data.objects.land).features)
                    .enter().append("path")
                    .attr("d", path)
                    .attr("fill", "#cc6633") // Mars-like red-orange
                    .attr("stroke", "#aa4422");

                // Enable rotation with dragging
                const drag = d3.drag().on("drag", (event) => {
                    const rotate = projection.rotate();
                    const newRotate = [rotate[0] + event.dx / 4, rotate[1] - event.dy / 4];
                    projection.rotate(newRotate);
                    svg.selectAll("path").attr("d", path);
                });

                svg.call(drag);
            });

    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default MarsMap;
