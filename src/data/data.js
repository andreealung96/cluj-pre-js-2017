function getEvaluationsTableData() {
    return {
        itemHeadings:
        [
            'Nume', 'Tehnologie', 'Nivel',''
        ],
        items:
        [
            {
                name: 'Popescu Adrian',
                technology: 'Javascript',
                level: 'Mid 2',
            },
            {
                name: 'Dragan Roxana',
                technology: 'PHP',
                level: 'Mid 1',
            },
            {
                name: 'Florescu Mihai',
                technology: 'Javascript',
                level: 'Junior 3',
            },
            {
                name: 'Gheorghe Andrei',
                technology: 'Ruby',
                level: 'Senior 1',
            },
        ]
    }
}

function getTechnicalLevel () {
    return  {
        title: "Technical level",
        headers: [
            "Trainee", "Junior", "Middle", "Senior"
        ],
        columnData: [
            {
                inputValues: ["Trainee"]
            },
            {
                inputValues: [
                    "Junior1", "Junior2", "Junior3"
                ]
            },
            {
                inputValues: [
                    "Middle1", "Middle2", "Middle3"
                ]
            },
            {
                inputValues: [
                    "Senior1", "Senior2", "Senior3"
                ]
            }
        ]
    };
}

function getTextarea () {
    return {
        textarea:
        [
            {
                label:"Should the candidate be hired?",
                placeholder: "The type of project that is suitable for the candidate&#13;&#10;Is guidance required for the candidate", 
            },
            {
                label:"General Impression", 
                placeholder: "*required", 
            },
            {
                label: "Workflow, Leadership &amp; Softskills",
                placeholder:  "Describe the environment in which the candidate works.&#13;&#10;Describe any guidance or management experience."
            }
        ]
    }; 
}

 function getFieldset () { 
     return {
            fieldset:
            [
                {
                    legend:"OOP, Design Patterns",
                    ul: [
                        {
                            row: [
                                {
                                    label: "Classes",
                                    options: ["0", "1", "2", "3"]
                                },
                                {
                                    label: "Exception handling",
                                    options: ["0", "1", "2", "3"]
                                },
                                {
                                    label: "Version Control",
                                    options: ["0", "1", "2", "3"]
                                }
                            ]
                        },
                        {
                            row:  [
                                {
                                    label: "Access modifiers",
                                    options: ["0", "1", "2", "3"]
                                },
                                {
                                    label: "Design Patterns",
                                    options: ["0", "1", "2", "3"]
                                },
                                {
                                    label: "Issue Tracking",
                                    options: ["0", "1", "2", "3"]
                                }
                            ]
                        },
                        {
                            row:   [
                                {
                                    label: "Polymorphism",
                                    options: ["0", "1", "2", "3"]
                                },
                                {
                                    label: "RegEx",
                                    options: ["0", "1", "2", "3"]
                                }
                            ]
                        },
                    ]
                },
                {
                    legend:"HTTP",
                    ul: [
                        { row: [
                        {
                            label: "Protocol",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Response codes",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "REST",
                            options: ["0", "1", "2", "3"]
                        }
                        ]},
                    { row: [
                        {
                            label: "HEADERS",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Request methods",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Sessions &amp; Cookies",
                            options: ["0", "1", "2", "3"]
                        }
                    ]}]
                },
                {
                    legend:"HTML",
                    ul: [{row: [
                        {
                            label: "Doctype",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Tags",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Basic SEO",
                            options: ["0", "1", "2", "3"]
                        }
                    ]},
                    {row: [
                        {
                            label: "Syntax rules",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Attributes",
                            options: ["0", "1", "2", "3"]
                        }
                    ]}]
                },
                {
                    legend:"CSS",
                    ul: [{row: [
                        {
                            label: "Usage",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Box modeling",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "CSS 3.0",
                            options: ["0", "1", "2", "3"]
                        }
                    ]},
                    {row: [
                        {
                            label: "Selectors",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Styling",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Dynamic Stylesheets",
                            options: ["0", "1", "2", "3"]
                        }
                    ]}]
                },
                {
                    legend:"Javascript",
                    ul: [{row: [
                        {
                            label: "Data types &amp; variables",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Object manipulation",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "DOM Manipulation",
                            options: ["0", "1", "2", "3"]
                        }
                    ]},
                    {row: [
                        {
                            label: "Functions",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Templating",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Event Handling",
                            options: ["0", "1", "2", "3"]
                        }
                    ]},
                    {row: [
                        {
                            label: "Prototype &amp; OOP",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Testing (unit, E2E)",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "AJAX",
                            options: ["0", "1", "2", "3"]
                        }
                    ]},
                    {row: [
                        {
                            label: "Debugging",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Websockets",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Tooling",
                            options: ["0", "1", "2", "3"]
                        }
                    ]},
                    {row: [
                        {
                            label: "Libraries",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Promises",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Browser Engines",
                            options: ["0", "1", "2", "3"]
                        }
                    ]},
                    {row: [
                        {
                            label: "Frameworks",
                            options: ["0", "1", "2", "3"]
                        }
                    ]}]
                },
                {
                    legend:"NodeJS",
                    ul: [{row: [
                        {
                            label: "Backend frameworks",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "Templating",
                            options: ["0", "1", "2", "3"]
                        },
                        {
                            label: "DOM Manipulation",
                            options: ["0", "1", "2", "3"]
                        }
                    ]},
                    {row: [
                        {
                            label: "Unit Testing",
                            options: ["0", "1", "2", "3"]
                        }
                    ]}]
                }
            ]
        }
}