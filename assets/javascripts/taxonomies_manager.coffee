#= require jstree/jquery.jstree

class TaxonomiesManager
  constructor: ->
    @tree = $("#jsTree")
    @buildTree()
    @tree


  buildTree: ->
    @tree.jstree(
      plugins: ["themes",  "html_data", "ui", "cookies", "search", "types"]
      themes:
        url: "/assets/jstree/themes/apple/style.css"
      search:
        ajax:
          url: "/refinery/themes/editor/search"
          data: (str) ->
            search_str: str
      types:
        max_depth: -2
        max_children: -2
        valid_children: ["drive"]
        types:
          default:
            valid_children: "none"
            icon:
              image: "/assets/jstree/file.png"
          folder:
            valid_children: ["default", "folder"]
            icon:
              image: "/assets/jstree/folder.png"
          drive:
            valid_children: ["default", "folder"]
            icon:
              image: "/assets/jstree/root.png"
            start_drag: false
            move_node: false
            delete_node: false
            remove: false
    ).bind("select_node.jstree", (e, data) ->
      if data.rslt.obj.attr("rel") is "default"
        $.ajax
          async: false
          type: "POST"
          url: "/refinery/themes/editor/file"
          beforeSend: (request) ->
            return true
          data:
            fullpath: data.rslt.obj.attr("fullpath")
          success: (result) ->
            if result
              $("#code").html result
              FilesManager.initHandlers()
              $.jGrowl data.rslt.obj.attr("fullpath") + " was loaded.",
                life: 5000
            else
              $.jGrowl result.notice,
                life: 5000
    )

$ ->
  taxonomiesManager = new TaxonomiesManager()