/* ========================================================================== */
// Cloud Map
/* ========================================================================== */

sections.push({
    'category': 'Networking &amp; Content Delivery',
    'service': 'Cloud Map',
    'resourcetypes': {
        'HTTP Namespaces': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'servicecount',
                        title: 'Service Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Public DNS Namespaces': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'servicecount',
                        title: 'Service Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Private DNS Namespaces': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'servicecount',
                        title: 'Service Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Services': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'id',
                        title: 'ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'namespaceid',
                        title: 'Namespace ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'instancecount',
                        title: 'Instance Count',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Instances': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'Name',
                        field: 'name',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    }
                ],
                [
                    // nothing
                ]
            ]
        }
    }
});

async function updateDatatableNetworkingAndContentDeliveryCloudMap() {
    blockUI('#section-networkingandcontentdelivery-cloudmap-httpnamespaces-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudmap-publicdnsnamespaces-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudmap-privatednsnamespaces-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudmap-services-datatable');
    blockUI('#section-networkingandcontentdelivery-cloudmap-instances-datatable');

    await sdkcall("ServiceDiscovery", "listNamespaces", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudmap-httpnamespaces-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-cloudmap-publicdnsnamespaces-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-cloudmap-privatednsnamespaces-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Namespaces.map(namespace => {
            return sdkcall("ServiceDiscovery", "getNamespace", {
                Id: namespace.Id
            }, true).then((data) => {
                if (data.Namespace.Type == "HTTP") {
                    $('#section-networkingandcontentdelivery-cloudmap-httpnamespaces-datatable').bootstrapTable('append', [{
                        f2id: data.Namespace.Arn,
                        f2type: 'servicediscovery.httpnamespace',
                        f2data: data.Namespace,
                        f2region: region,
                        id: data.Namespace.Id,
                        name: data.Namespace.Name,
                        description: data.Namespace.Description,
                        servicecount: data.Namespace.ServiceCount,
                        creationtime: data.Namespace.CreateDate
                    }]);
                } else if (data.Namespace.Type == "DNS_PUBLIC") {
                    $('#section-networkingandcontentdelivery-cloudmap-publicdnsnamespaces-datatable').bootstrapTable('append', [{
                        f2id: data.Namespace.Arn,
                        f2type: 'servicediscovery.publicdnsnamespace',
                        f2data: data.Namespace,
                        f2region: region,
                        name: data.Namespace.Name,
                        description: data.Namespace.Description,
                        servicecount: data.Namespace.ServiceCount,
                        creationtime: data.Namespace.CreateDate
                    }]);
                } else if (data.Namespace.Type == "DNS_PRIVATE") {
                    $('#section-networkingandcontentdelivery-cloudmap-privatednsnamespaces-datatable').bootstrapTable('append', [{
                        f2id: data.Namespace.Arn,
                        f2type: 'servicediscovery.privatednsnamespace',
                        f2data: data.Namespace,
                        f2region: region,
                        name: data.Namespace.Name,
                        description: data.Namespace.Description,
                        servicecount: data.Namespace.ServiceCount,
                        creationtime: data.Namespace.CreateDate
                    }]);
                }
            });
        }));

        unblockUI('#section-networkingandcontentdelivery-cloudmap-httpnamespaces-datatable');
        unblockUI('#section-networkingandcontentdelivery-cloudmap-publicdnsnamespaces-datatable');
        unblockUI('#section-networkingandcontentdelivery-cloudmap-privatednsnamespaces-datatable');
    });

    await sdkcall("ServiceDiscovery", "listServices", {
        // no params
    }, true).then(async (data) => {
        $('#section-networkingandcontentdelivery-cloudmap-services-datatable').bootstrapTable('removeAll');
        $('#section-networkingandcontentdelivery-cloudmap-instances-datatable').bootstrapTable('removeAll');

        await Promise.all(data.Services.map(service => {
            return Promise.all([
                sdkcall("ServiceDiscovery", "listInstances", {
                    ServiceId: service.Id
                }, true).then((data) => {
                    data.Instances.forEach(instance => {
                        sdkcall("ServiceDiscovery", "getInstance", {
                            InstanceId: instance.Id,
                            ServiceId: service.Id
                        }, true).then((data) => {
                            data.Instance['ServiceId'] = service.Id;
                            $('#section-networkingandcontentdelivery-cloudmap-instances-datatable').bootstrapTable('append', [{
                                f2id: data.Instance.Id,
                                f2type: 'servicediscovery.instance',
                                f2data: data.Instance,
                                f2region: region,
                                id: data.Instance.Id
                            }]);
                        });
                    });
                }),
                sdkcall("ServiceDiscovery", "getService", {
                    Id: service.Id
                }, true).then((data) => {
                    $('#section-networkingandcontentdelivery-cloudmap-services-datatable').bootstrapTable('append', [{
                        f2id: data.Service.Arn,
                        f2type: 'servicediscovery.service',
                        f2data: data.Service,
                        f2region: region,
                        id: data.Service.Id,
                        name: data.Service.Name,
                        namespaceid: data.Service.NamespaceId,
                        description: data.Service.Description,
                        instancecount: data.Service.InstanceCount
                    }]);
                })
            ]);
        }));

        unblockUI('#section-networkingandcontentdelivery-cloudmap-services-datatable');
        unblockUI('#section-networkingandcontentdelivery-cloudmap-instances-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});