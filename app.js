const content = {
    en: {
        title: "Welcome to SCIPro - Bioinformatics & Machine Learning Services",
        introTitle: "What We Do",
        introContent: "We provide professional and fast bioinformatics and machine learning analysis services...",
        servicesTitle: "Our Services",
        servicesList: ["Data analysis", "Machine learning model building", "Custom bioinformatics solutions"],
        footerContent: "Contact us at: "
    },
    zh: {
        title: "欢迎来到SCIPro - 生物信息学与机器学习服务",
        introTitle: "我们的工作",
        introContent: "我们提供专业且快速的生物信息学和机器学习分析服务...",
        servicesTitle: "我们的服务",
        servicesList: ["数据分析", "机器学习模型构建", "定制生物信息学解决方案"],
        footerContent: "联系我们: "
    }
};

function switchLanguage(lang) {
    document.getElementById("title").innerText = content[lang].title;
    document.getElementById("intro-title").innerText = content[lang].introTitle;
    document.getElementById("intro-content").innerText = content[lang].introContent;
    document.getElementById("services-title").innerText = content[lang].servicesTitle;

    let services = document.getElementById("services-list");
    services.innerHTML = "";  // Clear current list
    content[lang].servicesList.forEach(function(service) {
        let li = document.createElement("li");
        li.innerText = service;
        services.appendChild(li);
    });

    document.getElementById("footer-content").innerHTML = content[lang].footerContent + '<a href="mailto:chaofreddy@gmail.com">chaofreddy@gmail.com</a>';
}
