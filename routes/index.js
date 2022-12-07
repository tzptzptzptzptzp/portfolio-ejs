const express = require("express");
const router = express.Router();

const managementData = require("../public/json/management.json");
const designData = require("../public/json/design.json");
const otherData = require("../public/json/other.json");

router
    .get("", (req, res) => {
        res.render("index", { title: "ポートフォリオ", })
    })
    .get("/management/:id", (req, res) => {
        let url = req.params.id;
        let target = managementData.find((v) => v.id === url);
        res.render("management", { layout: "../views/layouts/page", title: target.title, thumb: target.thumb,  url: target.url, github: target.github, desc: target.desc, use: target.use, });    
    })
    .get("/design/:id", (req, res) => {
        let url = req.params.id;
        let target = designData.find((v) => v.id === url);
        res.render("page", { layout: "../views/layouts/page", title: target.title, thumb: target.thumb, desc: target.desc, use: target.use, });    
    })
    .get("/other/:id", (req, res) => {
        let url = req.params.id;
        let target = otherData.find((v) => v.id === url);
        res.render("page", { layout: "../views/layouts/page", title: target.title, thumb: target.thumb, desc: target.desc, use: target.use, });    
    })

module.exports = router;